import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/payment-intent/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { RBAC_SECRET_KEY, STRIPE_SECRET_KEY } from "@sps/shared-utils";
import Stripe from "stripe";
import { HTTPException } from "hono/http-exception";

@injectable()
export class Controller extends RESTController<(typeof Table)["$inferSelect"]> {
  service: Service;

  constructor(@inject(DI.IService) service: Service) {
    super(service);
    this.service = service;
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/dump",
        handler: this.dump,
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
      },
      {
        method: "POST",
        path: "/",
        handler: this.create,
      },
      {
        method: "PATCH",
        path: "/:uuid",
        handler: this.update,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
      {
        method: "POST",
        path: "/:provider/webhook",
        handler: this.providerWebhook,
      },
      {
        method: "POST",
        path: "/:uuid/:provider",
        handler: this.provider,
      },
    ]);
  }

  async provider(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC secret key not found",
      });
    }

    const uuid = c.req.param("uuid");

    if (!uuid) {
      throw new HTTPException(400, {
        message: "Invalid id",
      });
    }

    const body = await c.req.parseBody();
    const provider = c.req.param("provider");

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const entity = await this.service.findById({ id: uuid });

    const data = JSON.parse(body["data"]);

    if (!data) {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    console.log(`🚀 ~ provider ~ data:`, data);

    if (!entity) {
      throw new HTTPException(400, {
        message: "Payment intent not found",
      });
    }

    try {
      let result: any;

      if (provider === "stripe") {
        if (!data.metadata?.email) {
          throw new HTTPException(400, {
            message: "Email is required",
          });
        }

        result = await this.service.stripe({
          entity,
          action: "create",
          email: data.metadata.email,
          metadata: {
            orderId: data.metadata.orderId,
            email: data.metadata.email,
            subjectId: data.metadata.subjectId,
          },
        });
      } else if (provider === "0xprocessing") {
        if (!data.metadata?.email) {
          throw new HTTPException(400, {
            message: "Email is required",
          });
        }

        result = await this.service.OxProcessing({
          action: "create",
          email: data.metadata.email,
          metadata: {
            orderId: data.metadata.orderId,
            subjectId: data.metadata.subjectId,
          },
          entity,
        });
      } else if (provider.includes("payselection")) {
        // const credentialsType = provider.includes("international")
        //   ? "INT"
        //   : "RUB";
        // result = await this.service.payselection({
        //   credentialsType,
        //   entity,
        //   action: "create",
        //   email: identityWithEmail.email,
        //   subjectId: subjectId,
        // });
      } else if (provider === "cloudpayments") {
        if (!data.metadata?.email) {
          throw new HTTPException(400, {
            message: "Email is required",
          });
        }

        result = await this.service.cloudpayments({
          entity,
          action: "create",
          email: data.metadata.email,
          metadata: data.metadata,
        });
      }

      return c.json(
        {
          data: result,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async providerWebhook(c: Context, next: any): Promise<Response> {
    const provider = c.req.param("provider");
    const contentType = c.req.header("content-type");
    const headers = c.req.header();
    const rawBody = await c.req.text();

    console.log(`🚀 ~ providerWebhook ~ headers:`, headers);
    console.log(`🚀 ~ providerWebhook ~ headers:`, await c.req.text());

    let data;
    if (contentType?.includes("application/json")) {
      data = await c.req.json();
    } else if (contentType?.includes("multipart/form-data")) {
      const body = await c.req.parseBody();

      if (body["data"] instanceof File) {
        throw new HTTPException(400, {
          message: "Files are not supported",
        });
      }

      if (typeof body["data"] !== "string") {
        data = JSON.parse(body["data"]);
      }
    } else if (contentType?.includes("application/x-www-form-urlencoded")) {
      const params = new URLSearchParams(rawBody);
      data = Object.fromEntries(params.entries());
    }

    let result: any;

    if (provider === "stripe") {
      if (!STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
      }

      const stripe = new Stripe(STRIPE_SECRET_KEY);
      const event = await stripe.events.retrieve(data.id);

      result = await this.service.stripe({ data: event, action: "webhook" });
    } else if (provider === "0xprocessing") {
      result = await this.service.OxProcessing({ data, action: "webhook" });
    } else if (provider === "payselection") {
      if ("x-site-id" in headers && "x-webhook-signature" in headers) {
        result = await this.service.payselection({
          data,
          action: "webhook",
          rawBody,
          headers: {
            "x-site-id": headers["x-site-id"],
            "x-webhook-signature": headers["x-webhook-signature"],
          },
        });
      } else {
        throw new HTTPException(400, {
          message: "Missing headers",
        });
      }
    } else if (provider === "cloudpayments") {
      if ("x-content-hmac" in headers && "content-hmac" in headers) {
        result = await this.service.cloudpayments({
          data,
          action: "webhook",
          rawBody,
          headers: {
            "x-content-hmac": headers["x-content-hmac"],
            "content-hmac": headers["content-hmac"],
          },
        });
      }
    }

    console.log(`🚀 ~ providerWebhook ~ entity:`, result);

    return c.json(
      {
        data: result,
      },
      200,
    );
  }

  async update(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC secret key not found",
      });
    }

    try {
      const uuid = c.req.param("uuid");
      const body = await c.req.parseBody();

      if (!uuid) {
        return c.json(
          {
            message: "Invalid id",
          },
          {
            status: 400,
          },
        );
      }

      if (typeof body["data"] !== "string") {
        return c.json(
          {
            message: "Invalid body",
          },
          {
            status: 400,
          },
        );
      }

      const data = JSON.parse(body["data"]);

      const entity = await this.service.update({ id: uuid, data });

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
