import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Service } from "./service";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import {
  SPS_RBAC_JWT_SECRET,
  SPS_RBAC_SECRET_KEY,
  STRIPE_SECRET_KEY,
} from "@sps/shared-utils";
import * as jwt from "hono/jwt";
import Stripe from "stripe";
import * as crypto from "crypto";
import { NextApiRequest } from "next/dist/types";

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
    const body = await c.req.parseBody();
    const provider = c.req.param("provider");

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    try {
      let entity: (typeof Table)["$inferSelect"] | undefined;

      if (provider === "stripe") {
        entity = await this.service.stripe({ data, type: "create" });
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

    let entity: (typeof Table)["$inferSelect"] | undefined;

    if (provider === "stripe") {
      if (!STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
      }

      const stripe = new Stripe(STRIPE_SECRET_KEY);
      const event = await stripe.events.retrieve(data.id);

      entity = await this.service.stripe({ data: event, type: "webhook" });
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
