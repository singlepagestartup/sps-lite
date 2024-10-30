import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/ecommerce/models/product/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { api as ordersToProductsApi } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { api as attributeKeysToAttributesApi } from "@sps/ecommerce/relations/attribute-keys-to-attributes/sdk/server";
import { api as productsToAttributesApi } from "@sps/ecommerce/relations/products-to-attributes/sdk/server";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";
import { api as attributeKeyApi } from "@sps/ecommerce/models/attribute-key/sdk/server";
import { IModel as IAttribute } from "@sps/ecommerce/models/attribute/sdk/model";
import { api as attributeApi } from "@sps/ecommerce/models/attribute/sdk/server";
import { api as paymentIntentApi } from "@sps/billing/models/payment-intent/sdk/server";
import { api as ordersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { api as invoiceApi } from "@sps/billing/models/invoice/sdk/server";
import {
  RBAC_JWT_SECRET,
  RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
  RBAC_SECRET_KEY,
} from "@sps/shared-utils";
import { IModel as ISubject } from "@sps/rbac/models/subject/sdk/model";
import { api as subjectApi } from "@sps/rbac/models/subject/sdk/server";
import { api as identityApi } from "@sps/rbac/models/identity/sdk/server";
import { IModel as IIdentity } from "@sps/rbac/models/identity/sdk/model";
import { api as subjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";
import { api as subjectsToEcommerceModuleOrdersApi } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/server";
import * as jwt from "hono/jwt";

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
        method: "POST",
        path: "/enforce",
        handler: this.enforce,
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
        path: "/:uuid/checkout",
        handler: this.checkout,
      },
    ]);
  }

  async enforce(c: Context, next: any): Promise<Response> {
    try {
      if (!RBAC_SECRET_KEY) {
        return c.json(
          {
            message: "RBAC secret key not found",
          },
          {
            status: 400,
          },
        );
      }

      const products = await this.service.find({
        params: {
          filters: {
            and: [
              {
                column: "type",
                method: "eq",
                value: "subscription",
              },
            ],
          },
        },
      });

      for (const product of products) {
        let price: IAttribute | undefined;
        let interval: IAttribute | undefined;

        const productsToAttributes = await productsToAttributesApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "productId",
                  method: "eq",
                  value: product.id,
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

        if (!productsToAttributes?.length) {
          continue;
        }

        const attributes = await attributeApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "inArray",
                  value: productsToAttributes.map((pta) => pta.attributeId),
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

        if (!attributes?.length) {
          continue;
        }

        for (const attribute of attributes) {
          const attributeKeysToAttributes =
            await attributeKeysToAttributesApi.find({
              params: {
                filters: {
                  and: [
                    {
                      column: "attributeId",
                      method: "eq",
                      value: attribute.id,
                    },
                  ],
                },
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            });

          if (!attributeKeysToAttributes?.length) {
            continue;
          }

          const attributeKey = await attributeKeyApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "id",
                    method: "eq",
                    value: attributeKeysToAttributes[0].attributeKeyId,
                  },
                ],
              },
            },
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          });

          if (!attributeKey?.length) {
            continue;
          }

          if (attributeKey[0].type === "price") {
            price = attribute;
          }

          if (attributeKey[0].type === "interval") {
            interval = attribute;
          }
        }

        console.log(`🚀 ~ prolongate ~ price:`, price);
        console.log(`🚀 ~ prolongate ~ interval:`, interval);

        const ordersToProducts = await ordersToProductsApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "productId",
                  method: "eq",
                  value: product.id,
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

        if (!ordersToProducts?.length) {
          continue;
        }

        const orders = await orderApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "inArray",
                  value: ordersToProducts.map((otp) => otp.orderId),
                },
                {
                  column: "status",
                  method: "inArray",
                  value: ["approving", "packaging", "delivering", "canceled"],
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

        if (!orders?.length) {
          continue;
        }

        for (const order of orders) {
          const ordersToBillingModulePaymentIntents =
            await ordersToBillingModulePaymentIntentsApi.find({
              params: {
                filters: {
                  and: [
                    {
                      column: "orderId",
                      method: "eq",
                      value: order.id,
                    },
                  ],
                },
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            });

          if (!ordersToBillingModulePaymentIntents?.length) {
            continue;
          }

          if (ordersToBillingModulePaymentIntents.length > 1) {
            throw new HTTPException(400, {
              message: "Multiple billing module payment intents found",
            });
          }

          const paymentIntentId =
            ordersToBillingModulePaymentIntents[0].billingModulePaymentIntentId;

          const paymentIntent = await paymentIntentApi.findById({
            id: paymentIntentId,
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          });

          if (!paymentIntent) {
            throw new HTTPException(400, {
              message: "Payment intent not found",
            });
          }

          const paymentIntentsToInvoices =
            await paymentIntentsToInvoicesApi.find({
              params: {
                filters: {
                  and: [
                    {
                      column: "paymentIntentId",
                      method: "eq",
                      value: paymentIntent.id,
                    },
                  ],
                },
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            });

          if (!paymentIntentsToInvoices?.length) {
            continue;
          }

          const invoices = await invoiceApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "id",
                    method: "inArray",
                    value: paymentIntentsToInvoices?.map(
                      (pti) => pti.invoiceId,
                    ),
                  },
                  {
                    column: "status",
                    method: "eq",
                    value: "paid",
                  },
                ],
              },
              orderBy: {
                and: [
                  {
                    column: "updatedAt",
                    method: "desc",
                  },
                ],
              },
            },
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          });

          if (!invoices?.length) {
            continue;
          }

          const latestInvoice = invoices[0];

          console.log(`🚀 ~ enforce ~ latestInvoice:`, latestInvoice);

          let durationInMiliseconds = 31540000000;

          switch (interval?.string) {
            case "minute":
              durationInMiliseconds = 60000;
              break;
            case "hour":
              durationInMiliseconds = 3600000;
              break;
            case "day":
              durationInMiliseconds = 60000;
              // durationInMiliseconds = 86400000;
              break;
            case "week":
              durationInMiliseconds = 604800000;
              break;
            case "month":
              durationInMiliseconds = 2628000000;
              break;
            case "year":
              durationInMiliseconds = 31540000000;
              break;
          }

          const finishAt =
            new Date(latestInvoice.updatedAt).getTime() + durationInMiliseconds;

          console.log(`🚀 ~ enforce ~ finishAt:`, new Date(finishAt));

          if (finishAt < new Date().getTime()) {
            if (order.status === "canceled") {
              await orderApi.update({
                id: order.id,
                data: {
                  status: "delivered",
                },
                options: {
                  headers: {
                    "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                  },
                },
              });
              continue;
            }

            const providesWithSubscriptions = ["stripe", "payselection"];

            await paymentIntentApi.update({
              id: paymentIntentId,
              data: {
                ...paymentIntent,
                status: "requires_confirmation",
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            });

            await orderApi.update({
              id: order.id,
              data: {
                status: "paying",
              },
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            });

            if (
              latestInvoice.provider &&
              providesWithSubscriptions.includes(latestInvoice.provider)
            ) {
              continue;
            }

            if (!latestInvoice.provider) {
              continue;
            }

            await paymentIntentApi.provider({
              id: paymentIntentId,
              data: {
                provider: latestInvoice.provider,
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

            console.log(`🚀 ~ prolongate ~ invoices:`, invoices);
          }
        }
      }

      return c.json({
        data: products,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }

  async checkout(c: Context, next: any): Promise<Response> {
    try {
      if (!RBAC_SECRET_KEY) {
        return c.json(
          {
            message: "RBAC secret key not found",
          },
          {
            status: 400,
          },
        );
      }

      if (!RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS) {
        return c.json(
          {
            message: "RBAC jwt token lifetime not found",
          },
          {
            status: 400,
          },
        );
      }

      if (!RBAC_JWT_SECRET) {
        return c.json(
          {
            message: "RBAC jwt secret not found",
          },
          {
            status: 400,
          },
        );
      }

      const uuid = c.req.param("uuid");
      const body = await c.req.parseBody();
      console.log(`🚀 ~ checkout ~ body:`, body);

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

      const entity = await this.service.findById({ id: uuid });

      if (!entity) {
        return c.json(
          {
            message: "Entity not found",
          },
          {
            status: 404,
          },
        );
      }

      const identities = await identityApi.find({
        params: {
          filters: {
            and: [
              {
                column: "email",
                method: "eq",
                value: data.email,
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      let identity: IIdentity | undefined;
      let subject: ISubject | undefined;

      if (!identities?.length) {
        identity = await identityApi.create({
          data: {
            email: data.email,
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });
      } else {
        identity = identities[0];
      }

      const subjectsToIdentities = await subjectsToIdentitiesApi.find({
        params: {
          filters: {
            and: [
              {
                column: "identityId",
                method: "eq",
                value: identity.id,
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      if (!subjectsToIdentities?.length) {
        subject = await subjectApi.create({
          data: {
            identityId: identity.id,
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });
        await subjectsToIdentitiesApi.create({
          data: {
            subjectId: subject.id,
            identityId: identity.id,
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });
      } else {
        subject = await subjectApi.findById({
          id: subjectsToIdentities[0].subjectId,
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });
      }

      if (!subject) {
        throw new HTTPException(400, {
          message: "Subject not found",
        });
      }

      const jwtToken = await jwt.sign(
        {
          exp:
            Math.floor(Date.now() / 1000) + RBAC_JWT_TOKEN_LIFETIME_IN_SECONDS,
          iat: Math.floor(Date.now() / 1000),
          subject: {
            id: subject.id,
          },
        },
        RBAC_JWT_SECRET,
      );

      const order = await orderApi.create({
        data: {},
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      const orderToProduct = await ordersToProductsApi.create({
        data: {
          orderId: order.id,
          productId: entity.id,
          quantity: data.quantity,
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      const subjectToEcommerceModuleOrder =
        await subjectsToEcommerceModuleOrdersApi.create({
          data: {
            subjectId: subject.id,
            ecommerceModuleOrderId: order.id,
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

      const checkout = await orderApi.checkout({
        id: order.id,
        data: {
          provider: data.provider,
          email: data.email,
        },
        options: {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      });

      const ordersToBillingModulePaymentIntents =
        await ordersToBillingModulePaymentIntentsApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "orderId",
                  method: "eq",
                  value: order.id,
                },
              ],
            },
          },
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
          },
        });

      if (!ordersToBillingModulePaymentIntents?.length) {
        throw new HTTPException(400, {
          message: "Billing module payment intent not found",
        });
      }

      if (ordersToBillingModulePaymentIntents.length > 1) {
        throw new HTTPException(400, {
          message: "Multiple billing module payment intents found",
        });
      }

      const paymentIntentId =
        ordersToBillingModulePaymentIntents[0].billingModulePaymentIntentId;

      const paymentIntent = await paymentIntentApi.findById({
        id: paymentIntentId,
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      if (!paymentIntent) {
        throw new HTTPException(400, {
          message: "Payment intent not found",
        });
      }

      const paymentIntentsToInvoices = await paymentIntentsToInvoicesApi.find({
        params: {
          filters: {
            and: [
              {
                column: "paymentIntentId",
                method: "eq",
                value: paymentIntent.id,
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      const invoices = await invoiceApi.find({
        params: {
          filters: {
            and: [
              {
                column: "id",
                method: "inArray",
                value: paymentIntentsToInvoices?.map((pti) => pti.invoiceId),
              },
              {
                column: "status",
                method: "eq",
                value: "open",
              },
            ],
          },
          orderBy: {
            and: [
              {
                column: "createdAt",
                method: "desc",
              },
            ],
          },
        },
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
        },
      });

      if (!invoices?.length) {
        throw new HTTPException(400, {
          message: "Invoice not found",
        });
      }

      const latestInvoice = invoices[0];

      return c.json({
        data: { invoice: latestInvoice },
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
