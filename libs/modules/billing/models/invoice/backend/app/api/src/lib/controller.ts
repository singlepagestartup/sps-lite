import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Service } from "./service";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { RBAC_SECRET_KEY, STRIPE_SECRET_KEY } from "@sps/shared-utils";
import Stripe from "stripe";
import { api as subjectApi } from "@sps/rbac/models/subject/sdk/server";
import { api as identityApi } from "@sps/rbac/models/identity/sdk/server";
import { api as subjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";

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
        path: "/:provider",
        handler: this.provider,
      },
      {
        method: "POST",
        path: "/:provider/webhook",
        handler: this.providerWebhook,
      },
    ]);
  }

  async provider(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC secret key not found",
      });
    }

    const body = await c.req.parseBody();
    const provider = c.req.param("provider");

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    if (!data.subjectId) {
      throw new HTTPException(400, {
        message: "data.subjectId is required for that method",
      });
    }

    const subjectsToIdentities = await subjectsToIdentitiesApi.find({
      params: {
        filters: {
          and: [
            {
              column: "subjectId",
              method: "eq",
              value: data.subjectId,
            },
          ],
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!subjectsToIdentities?.length) {
      throw new HTTPException(400, {
        message: "No subjects-to-identities found for this subject",
      });
    }

    const identities = await identityApi.find({
      params: {
        filters: {
          and: [
            {
              column: "id",
              method: "inArray",
              value: subjectsToIdentities.map((item) => item.identityId),
            },
          ],
        },
      },
      options: {
        headers: {
          "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
        },
        next: {
          cache: "no-store",
        },
      },
    });

    if (!identities?.length) {
      throw new HTTPException(400, {
        message: "No identity found for this subject",
      });
    }

    const identityWithEmail = identities.find(
      (item) => item.email !== undefined && item.email !== null,
    );

    if (!identityWithEmail) {
      throw new HTTPException(400, {
        message: "No identities with email found for this subject",
      });
    }

    if (!identityWithEmail.email) {
      throw new HTTPException(400, {
        message: "No email found for this identity",
      });
    }

    try {
      let entity: (typeof Table)["$inferSelect"] | undefined;

      if (provider === "stripe") {
        entity = await this.service.stripe({
          data,
          type: "create",
          email: identityWithEmail.email,
          subjectId: data.subjectId,
        });
      } else if (provider === "0xprocessing") {
        entity = await this.service.OxProcessing({
          data,
          type: "create",
          email: identityWithEmail.email,
          subjectId: data.subjectId,
        });
      }

      return c.json(
        {
          data: entity,
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

    let data;
    if (contentType?.includes("application/json")) {
      data = await c.req.json();
    } else {
      const body = await c.req.parseBody();

      if (body["data"] instanceof File) {
        throw new HTTPException(400, {
          message: "Files are not supported",
        });
      }

      if (typeof body["data"] !== "string") {
        data = JSON.parse(body["data"]);
      }
    }

    console.log(`🚀 ~ providerWebhook ~ data:`, data);

    let entity: (typeof Table)["$inferSelect"] | undefined;

    if (provider === "stripe") {
      if (!STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
      }

      const stripe = new Stripe(STRIPE_SECRET_KEY);
      const event = await stripe.events.retrieve(data.id);

      entity = await this.service.stripe({ data: event, type: "webhook" });
    } else if (provider === "0xprocessing") {
      entity = await this.service.OxProcessing({ data, type: "webhook" });
    }

    if (entity) {
      await this.service.updatePaymentIntentStatus({ invoice: entity });
    }

    return c.json(
      {
        data: entity,
      },
      200,
    );
  }
}
