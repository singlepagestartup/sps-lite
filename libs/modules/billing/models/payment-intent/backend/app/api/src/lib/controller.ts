import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/billing/models/payment-intent/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
// import { api as invoiceApi } from "@sps/billing/models/invoice/sdk/server";
// import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { RBAC_SECRET_KEY, STRIPE_SECRET_KEY } from "@sps/shared-utils";
import Stripe from "stripe";
import { HTTPException } from "hono/http-exception";
import { api as ecommerceOrdersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { api as ecommerceOrdersApi } from "@sps/ecommerce/models/order/sdk/server";
import { api as subjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";
import { api as identityApi } from "@sps/rbac/models/identity/sdk/server";
import { api as subjectsToBillingModulePaymentIntentsApi } from "@sps/rbac/relations/subjects-to-billing-module-payment-intents/sdk/server";

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

    if (!entity) {
      throw new HTTPException(400, {
        message: "Payment intent not found",
      });
    }

    const subjectsToBillingModulePaymentIntents =
      await subjectsToBillingModulePaymentIntentsApi.find({
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
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

    if (!subjectsToBillingModulePaymentIntents?.length) {
      throw new HTTPException(400, {
        message:
          "No subjects-to-billing-module-payment-intents found for this payment intent",
      });
    }

    const subjectId = subjectsToBillingModulePaymentIntents[0].subjectId;

    if (
      subjectsToBillingModulePaymentIntents.every(
        (item) => item.subjectId !== subjectId,
      )
    ) {
      throw new HTTPException(400, {
        message: "Subjects to billing module payments intents are different",
      });
    }

    const orderToBillingModulePaymentIntents =
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
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

    if (!orderToBillingModulePaymentIntents?.length) {
      throw new HTTPException(400, {
        message:
          "No orders-to-billing-module-payment-intents found for this payment intent",
      });
    }

    const orderId = orderToBillingModulePaymentIntents[0].orderId;

    if (
      orderToBillingModulePaymentIntents.every(
        (item) => item.orderId !== orderId,
      )
    ) {
      throw new HTTPException(400, {
        message: "Orders to billing module payments intents are different",
      });
    }

    const data: {
      amount: number;
      orderId: string;
      type: "one_off" | "subscription";
      interval?: "day" | "week" | "month" | "year";
    } = JSON.parse(body["data"]);

    const subjectsToIdentities = await subjectsToIdentitiesApi.find({
      params: {
        filters: {
          and: [
            {
              column: "subjectId",
              method: "eq",
              value: subjectId,
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
      let result: any;

      if (provider === "stripe") {
        result = await this.service.stripe({
          entity,
          action: "create",
          email: identityWithEmail.email,
          subjectId: subjectId,
          orderId,
        });
      } else if (provider === "0xprocessing") {
        result = await this.service.OxProcessing({
          data,
          action: "create",
          email: identityWithEmail.email,
          subjectId: subjectId,
        });
      } else if (provider === "payselection") {
        result = await this.service.payselection({
          data,
          action: "create",
          email: identityWithEmail.email,
          subjectId: subjectId,
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
    const body = await c.req.parseBody();

    console.log(`🚀 ~ providerWebhook ~ headers:`, headers);
    console.log(`🚀 ~ providerWebhook ~ headers:`, await c.req.text());

    let data;
    if (contentType?.includes("application/json")) {
      data = await c.req.json();
    } else {
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

    let entity: any;

    if (provider === "stripe") {
      if (!STRIPE_SECRET_KEY) {
        throw new Error("Stripe secret key not found");
      }

      const stripe = new Stripe(STRIPE_SECRET_KEY);
      const event = await stripe.events.retrieve(data.id);

      entity = await this.service.stripe({ data: event, action: "webhook" });
    } else if (provider === "0xprocessing") {
      entity = await this.service.OxProcessing({ data, action: "webhook" });
    } else if (provider === "payselection") {
      if ("x-site-id" in headers && "x-webhook-signature" in headers) {
        entity = await this.service.payselection({
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
    }

    console.log(`🚀 ~ providerWebhook ~ entity:`, entity);

    if (entity?.status === "paid") {
      await this.service.updatePaymentIntentStatus({ invoice: entity });
    }

    return c.json(
      {
        data: entity,
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
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
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
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
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
                type: "history",
              },
              id: order.id,
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
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
