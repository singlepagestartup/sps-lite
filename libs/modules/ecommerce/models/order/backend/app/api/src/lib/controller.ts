import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/ecommerce/models/order/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { api as billingPaymentIntent } from "@sps/billing/models/payment-intent/sdk/server";
import { api as invoiceApi } from "@sps/billing/models/invoice/sdk/server";
import { api as paymentIntentsToInvoicesApi } from "@sps/billing/relations/payment-intents-to-invoices/sdk/server";
import { api as ordersToProducts } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { api as productsToAttributes } from "@sps/ecommerce/relations/products-to-attributes/sdk/server";
import { api as attributeKeysToAttributes } from "@sps/ecommerce/relations/attribute-keys-to-attributes/sdk/server";
import { api as attribute } from "@sps/ecommerce/models/attribute/sdk/server";
import { IModel as IAttribute } from "@sps/ecommerce/models/attribute/sdk/model";
import { api as attributeKeys } from "@sps/ecommerce/models/attribute-key/sdk/server";
import { HOST_URL, RBAC_JWT_SECRET, RBAC_SECRET_KEY } from "@sps/shared-utils";
import { api as ordersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { authorization } from "@sps/sps-backend-utils";
import { api as subjectApi } from "@sps/rbac/models/subject/sdk/server";
import { api as fileStorageFileApi } from "@sps/file-storage/models/file/sdk/server";
import { api as rbacSubjectsToEcommerceModuleOrdersApi } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/server";
import { api as rbacSubjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";
import { api as rbacIdentityApi } from "@sps/rbac/models/identity/sdk/server";
import { api as notificationNotificationsApi } from "@sps/notification/models/notification/sdk/server";
import { api as notificationTemplatesApi } from "@sps/notification/models/template/sdk/server";
import { api as notificationTopicsApi } from "@sps/notification/models/topic/sdk/server";
import { api as notificationTopicsToNotificationsApi } from "@sps/notification/relations/topics-to-notifications/sdk/server";
import { api as notificationNotificationsToTemplatesApi } from "@sps/notification/relations/notifications-to-templates/sdk/server";
import QueryString from "qs";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";

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
        path: "/:uuid/checkout",
        handler: this.checkout,
      },
    ]);
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

      if (!RBAC_JWT_SECRET) {
        return c.json(
          {
            message: "RBAC JWT secret not found",
          },
          {
            status: 400,
          },
        );
      }

      const token = authorization(c);

      if (!token) {
        return c.json(
          {
            message: "Unauthorized",
          },
          {
            status: 401,
          },
        );
      }

      const subject = await subjectApi.me({
        options: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          next: {
            cache: "no-store",
          },
        },
      });

      if (!subject) {
        return c.json(
          {
            message: "Not found",
          },
          {
            status: 404,
          },
        );
      }

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

      const oldOrders = await orderApi.find({
        params: {
          filters: {
            and: [
              {
                column: "createdAt",
                method: "lt",
                value: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
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

      if (oldOrders?.length) {
        for (const oldOrder of oldOrders) {
          const orderToBillingPaymentIntents =
            await ordersToBillingModulePaymentIntentsApi.find({
              params: {
                filters: {
                  and: [
                    {
                      column: "orderId",
                      method: "eq",
                      value: oldOrder.id,
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

          if (orderToBillingPaymentIntents?.length) {
            continue;
          }

          await orderApi.delete({
            id: oldOrder.id,
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          });
        }
      }

      const data = JSON.parse(body["data"]);

      const provider = data["provider"] ?? "stripe";

      console.log(`🚀 ~ checkout ~ provider:`, provider);

      const existing = await this.service.findById({
        id: uuid,
      });

      if (!existing) {
        return c.json(
          {
            message: "Order not found",
          },
          {
            status: 404,
          },
        );
      }

      const priceAttributeKeys = await attributeKeys.find({
        params: {
          filters: {
            and: [
              {
                column: "type",
                method: "eq",
                value: "price",
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

      if (!priceAttributeKeys?.length) {
        return c.json(
          {
            message: "Price attribute key not found",
          },
          {
            status: 404,
          },
        );
      }

      const priceAttributeKey = priceAttributeKeys[0];

      const orderToProducts = await ordersToProducts.find({
        params: {
          filters: {
            and: [
              {
                column: "orderId",
                method: "eq",
                value: uuid,
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

      if (!orderToProducts?.length) {
        return c.json(
          {
            message: "Order does not have any products",
          },
          {
            status: 401,
          },
        );
      }

      let amount = 0;

      for (const orderToProduct of orderToProducts) {
        const productToAttributes = await productsToAttributes.find({
          params: {
            filters: {
              and: [
                {
                  column: "productId",
                  method: "eq",
                  value: orderToProduct.productId,
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

        if (!productToAttributes?.length) {
          return c.json(
            {
              message: "Product does not have any attributes",
            },
            {
              status: 401,
            },
          );
        }

        const productPrices: IAttribute[] = [];

        for (const productToAttribute of productToAttributes) {
          const productPriceAttributes = await attributeKeysToAttributes.find({
            params: {
              filters: {
                and: [
                  {
                    column: "attributeId",
                    method: "eq",
                    value: productToAttribute.attributeId,
                  },
                  {
                    column: "attributeKeyId",
                    method: "eq",
                    value: priceAttributeKey.id,
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

          if (!productPriceAttributes?.length) {
            continue;
          }

          if (productPriceAttributes.length > 1) {
            return c.json(
              {
                message: "Product has multiple price attributes",
              },
              {
                status: 401,
              },
            );
          }

          const priceAttribute = await attribute.findById({
            id: productPriceAttributes[0].attributeId,
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
              next: {
                cache: "no-store",
              },
            },
          });

          if (!priceAttribute) {
            return c.json(
              {
                message: "Price attribute not found",
              },
              {
                status: 404,
              },
            );
          }

          productPrices.push(priceAttribute);
        }

        if (!productPrices.length) {
          return c.json(
            {
              message: "Product does not have any price attributes",
            },
            {
              status: 401,
            },
          );
        }

        amount += Number(productPrices[0].number) * orderToProduct.quantity;
      }

      const entity = await this.service.update({
        id: uuid,
        data: {
          ...existing,
          status: "paying",
        },
      });

      const paymentIntent = await billingPaymentIntent.create({
        data: {
          amount,
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

      const invoice = await invoiceApi.provider({
        data: {
          provider,
          amount,
          subjectId: subject.id,
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

      if (!invoice) {
        throw new HTTPException(404, {
          message: "Invoice not found",
        });
      }

      const paymentIntentToInvoice = await paymentIntentsToInvoicesApi.create({
        data: {
          paymentIntentId: paymentIntent.id,
          invoiceId: invoice.id,
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

      const orderToBillingPaymentIntent =
        await ordersToBillingModulePaymentIntentsApi.create({
          data: {
            orderId: uuid,
            billingModulePaymentIntentId: paymentIntent.id,
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

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
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

      let entity = await this.service.update({ id: uuid, data });

      if (entity?.status === "approving") {
        const query = QueryString.stringify({
          variant: "order-receipt",
          data: entity,
        });

        const receiptFile = await fileStorageFileApi.createFromUrl({
          data: {
            url: `${HOST_URL}/api/image-generator/image.png?${query}`,
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

        entity = await this.service.update({
          id: uuid,
          data: {
            ...entity,
            receipt: receiptFile.file,
          },
        });
      }

      const rbacSubjectsToEcommerceModuleOrders =
        await rbacSubjectsToEcommerceModuleOrdersApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "ecommerceModuleOrderId",
                  method: "eq",
                  value: uuid,
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

      if (rbacSubjectsToEcommerceModuleOrders?.length) {
        for (const rbacSubjectToEcommerceModuleOrder of rbacSubjectsToEcommerceModuleOrders) {
          const subjectsToIdentities = await rbacSubjectsToIdentitiesApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "subjectId",
                    method: "eq",
                    value: rbacSubjectToEcommerceModuleOrder.subjectId,
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
            continue;
          }

          let topics = await notificationTopicsApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "title",
                    method: "eq",
                    value: "Information",
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

          if (!topics?.length) {
            topics = [
              await notificationTopicsApi.create({
                data: {
                  title: "Information",
                },
                options: {
                  headers: {
                    "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                  },
                  next: {
                    cache: "no-store",
                  },
                },
              }),
            ];
          }

          const templates = await notificationTemplatesApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "variant",
                    method: "eq",
                    value: "order-status-changed-to-paid",
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

          if (!templates?.length) {
            throw new HTTPException(404, {
              message: "Templates not found",
            });
          }

          const identities = await rbacIdentityApi.find({
            params: {
              filters: {
                and: [
                  {
                    column: "id",
                    method: "eq",
                    value: subjectsToIdentities[0].identityId,
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
            continue;
          }

          for (const identity of identities) {
            if (!identity.email) {
              continue;
            }

            const notification = await notificationNotificationsApi.create({
              data: {
                reciever: identity.email,
                data: JSON.stringify({
                  title: "Order status updated",
                  subject: "Order status updated",
                  id: entity?.id || "",
                }),
                method: "email",
                attachments: entity?.receipt
                  ? JSON.stringify([{ type: "image", url: entity.receipt }])
                  : "[]",
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

            if (!notification) {
              continue;
            }

            await notificationNotificationsToTemplatesApi.create({
              data: {
                notificationId: notification.id,
                templateId: templates[0].id,
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

            const topicToNotification =
              await notificationTopicsToNotificationsApi.create({
                data: {
                  topicId: topics[0].id,
                  notificationId: notification.id,
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
          }
        }
      }

      await notificationTopicsApi.sendAll({
        options: {
          headers: {
            "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
          },
          next: {
            cache: "no-store",
          },
        },
      });

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
