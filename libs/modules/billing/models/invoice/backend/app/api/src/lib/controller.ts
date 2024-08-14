import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/invoice/backend/repository/database";
import { Service } from "./service";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import * as jwt from "hono/jwt";
import { SPS_RBAC_JWT_SECRET, SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";

@injectable()
export class Controller extends RESTController<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IService) service: Service) {
    super(service);

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
        method: "GET",
        path: "/:uuid/webhook",
        handler: this.webhook,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
    ]);
  }

  async create(c: Context, next: any): Promise<Response> {
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    try {
      const entity = await this.service.create({ data });

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

  async webhook(c: Context, next: any): Promise<Response> {
    const query = c.req.query();
    if (query.signature) {
      if (!SPS_RBAC_JWT_SECRET) {
        return c.json(
          {
            message: "RBAC secret key not found",
          },
          {
            status: 400,
          },
        );
      }

      if (!SPS_RBAC_SECRET_KEY) {
        return c.json(
          {
            message: "RBAC secret key not found",
          },
          {
            status: 400,
          },
        );
      }

      const signature = query.signature;
      const decoded = await jwt.verify(signature, SPS_RBAC_JWT_SECRET);

      if (!decoded.invoice) {
        return c.json(
          {
            message: "Invalid signature",
          },
          {
            status: 400,
          },
        );
      }

      const invoiceId = decoded.invoice["id"];

      if (!invoiceId) {
        return c.json(
          {
            message: "Invalid invoice id",
          },
          {
            status: 400,
          },
        );
      }

      const invoice = await this.service.findById({ id: invoiceId });

      if (!invoice) {
        return c.json(
          {
            message: "Invoice not found",
          },
          {
            status: 404,
          },
        );
      }

      const updated = await this.service.update({
        id: invoiceId,
        data: {
          ...invoice,
          paymentUrl: "",
          status: "paid",
        },
      });

      const paymentIntentToInvoices = await paymentIntentsToInvoicesApi.find({
        params: {
          filters: {
            and: [
              {
                column: "invoiceId",
                method: "eq",
                value: invoiceId,
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

      if (paymentIntentToInvoices?.length) {
        for (const paymentIntentToInvoice of paymentIntentToInvoices) {
          await paymentIntentsToInvoicesApi.update({
            id: paymentIntentToInvoice.id,
            data: {
              ...paymentIntentToInvoice,
              status: "succeeded",
            },
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
              },
              next: {
                cache: "no-store",
              },
            },
          });
        }
      }
    }

    return c.redirect("/", 301);
  }
}
