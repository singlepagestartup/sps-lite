import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/payment-intent/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { api as invoiceApi } from "@sps/billing/models/invoice/sdk/server";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { HTTPException } from "hono/http-exception";
import { api as ecommerceOrdersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { api as ecommerceOrdersApi } from "@sps/ecommerce/models/order/sdk/server";

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
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
      {
        method: "POST",
        path: "/:provider",
        handler: this.provider,
      },
    ]);
  }

  async provider(c: Context, next: any): Promise<Response> {
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

    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    try {
      const entity = await this.service.create({ data });

      if (!entity) {
        throw new HTTPException(400, {
          message: "Invalid data",
        });
      }

      const invoice = await invoiceApi.provider({
        provider: "stripe",
        data: {
          amount: entity.amount,
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

      if (!invoice) {
        throw new HTTPException(400, {
          message: "Invalid data",
        });
      }

      const paymentIntentToInvoice = await paymentIntentsToInvoicesApi.create({
        data: {
          paymentIntentId: entity?.id,
          invoiceId: invoice.id,
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

  async update(c: Context, next: any): Promise<Response> {
    if (!SPS_RBAC_SECRET_KEY) {
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

      if (entity?.status === "succeeded") {
        const ecommerceOrdersToBillingModulePaymentIntents =
          await ecommerceOrdersToBillingModulePaymentIntentsApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "billingModulePaymentIntentId",
                    method: "eq",
                    value: entity.id,
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

        if (ecommerceOrdersToBillingModulePaymentIntents?.length) {
          for (const ecommerceOrderToBillingModulePaymentIntent of ecommerceOrdersToBillingModulePaymentIntents) {
            const order = await ecommerceOrdersApi.findById({
              id: ecommerceOrderToBillingModulePaymentIntent.orderId,
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
                },
                next: {
                  cache: "no-store",
                },
              },
            });

            if (!order) {
              continue;
            }

            await ecommerceOrdersApi.update({
              data: {
                ...order,
                status: "approving",
              },
              id: order.id,
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
