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
import { api as rbacSubjectsToEcommerceModuleOrdersApi } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/server";
import { RBAC_SECRET_KEY } from "@sps/shared-utils";

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
        path: "/prolongate",
        handler: this.prolongate,
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
    ]);
  }

  async prolongate(c: Context, next: any): Promise<Response> {
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
        let timeframe: IAttribute | undefined;

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
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
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
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
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
                options: {
                  headers: {
                    "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                  },
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
              options: {
                headers: {
                  "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                },
              },
            },
          });

          if (!attributeKey?.length) {
            continue;
          }

          if (attributeKey[0].type === "price") {
            price = attribute;
          }

          if (attributeKey[0].type === "cron") {
            timeframe = attribute;
          }
        }

        console.log(`🚀 ~ prolongate ~ price:`, price);
        console.log(`🚀 ~ prolongate ~ timeframe:`, timeframe);

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
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
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
                  value: ["delivering", "packaging", "approving"],
                },
              ],
            },
            options: {
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          },
        });

        if (!orders?.length) {
          continue;
        }

        for (const order of orders) {
          if (timeframe?.string === "every_minute") {
            const timeBetween =
              new Date().getTime() - new Date(order.updatedAt).getTime();
            const minutesBetween = Math.floor(timeBetween / 1000 / 60);

            const rbacSubjectsToEcommerceModuleOrders =
              await rbacSubjectsToEcommerceModuleOrdersApi.find({
                params: {
                  filters: {
                    and: [
                      {
                        column: "ecommerceModuleOrderId",
                        method: "eq",
                        value: order.id,
                      },
                    ],
                  },
                  options: {
                    headers: {
                      "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                    },
                  },
                },
              });

            console.log(
              `🚀 ~ prolongate ~ rbacSubjectsToEcommerceModuleOrders:`,
              rbacSubjectsToEcommerceModuleOrders,
            );

            if (minutesBetween >= 1) {
              const delivered = await orderApi.update({
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

              if (rbacSubjectsToEcommerceModuleOrders?.length) {
                const newOrder = await orderApi.create({
                  data: {
                    status: "new",
                    type: "cart",
                  },
                  options: {
                    headers: {
                      "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                    },
                  },
                });
                const ordersToProducts = await ordersToProductsApi.create({
                  data: {
                    orderId: newOrder.id,
                    productId: product.id,
                  },
                  options: {
                    headers: {
                      "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                    },
                  },
                });
                const subjectsToEcommerceModuleOrders =
                  await rbacSubjectsToEcommerceModuleOrdersApi.create({
                    data: {
                      ecommerceModuleOrderId: newOrder.id,
                      subjectId:
                        rbacSubjectsToEcommerceModuleOrders[0].subjectId,
                    },
                    options: {
                      headers: {
                        "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
                      },
                    },
                  });
              }
            }
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
}
