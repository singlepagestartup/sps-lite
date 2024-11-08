import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/ecommerce/models/order/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { api as billingPaymentIntentApi } from "@sps/billing/models/payment-intent/sdk/server";
import { api as ordersToProductsApi } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { HOST_URL, RBAC_JWT_SECRET, RBAC_SECRET_KEY } from "@sps/shared-utils";
import { api as ordersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { authorization } from "@sps/sps-backend-utils";
import { api as subjectApi } from "@sps/rbac/models/subject/sdk/server";
import { api as fileStorageFileApi } from "@sps/file-storage/models/file/sdk/server";
import { api as rbacSubjectsToEcommerceModuleOrdersApi } from "@sps/rbac/relations/subjects-to-ecommerce-module-orders/sdk/server";
import { api as rbacSubjectsToRolesApi } from "@sps/rbac/relations/subjects-to-roles/sdk/server";
import { api as rbacSubjectsToIdentitiesApi } from "@sps/rbac/relations/subjects-to-identities/sdk/server";
import { api as rbacIdentityApi } from "@sps/rbac/models/identity/sdk/server";
import { api as notificationNotificationsApi } from "@sps/notification/models/notification/sdk/server";
import { api as notificationTemplatesApi } from "@sps/notification/models/template/sdk/server";
import { api as notificationTopicsApi } from "@sps/notification/models/topic/sdk/server";
import { api as productApi } from "@sps/ecommerce/models/product/sdk/server";
import { api as notificationTopicsToNotificationsApi } from "@sps/notification/relations/topics-to-notifications/sdk/server";
import { api as notificationNotificationsToTemplatesApi } from "@sps/notification/relations/notifications-to-templates/sdk/server";
import { api as subjectsToBillingModulePaymentIntentsApi } from "@sps/rbac/relations/subjects-to-billing-module-payment-intents/sdk/server";
import { IModel as IRolesToEcommerceModuleProducts } from "@sps/rbac/relations/roles-to-ecommerce-module-products/sdk/model";
import { api as rolesToEcommerceModuleProductsApi } from "@sps/rbac/relations/roles-to-ecommerce-module-products/sdk/server";
import QueryString from "qs";
import { api as broadcastChannelApi } from "@sps/broadcast/models/channel/sdk/server";
import { api } from "@sps/ecommerce/models/order/sdk/server";
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
        path: "/:uuid/checkout",
        handler: this.checkout,
      },
      {
        method: "POST",
        path: "/:uuid/check",
        handler: this.check,
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

      this.service.clearOldOrders();

      const data = JSON.parse(body["data"]);

      const provider = data["provider"] ?? "stripe";

      console.log(`🚀 ~ checkout ~ provider:`, provider);

      const metadata = {
        orderId: uuid,
        subjectId: subject.id,
      };

      if (!data["email"]) {
        const identities = await subjectApi.identities({
          id: subject.id,
          params: {
            filters: {
              and: [
                {
                  column: "email",
                  method: "isNotNull",
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

        if (identities?.length) {
          if (identities.length > 1) {
            throw new HTTPException(400, {
              message: "Multiple identities with email found",
            });
          }

          metadata["email"] = identities[0].email;
        }
      } else {
        metadata["email"] = data["email"];
      }

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

      const orderToProducts = await ordersToProductsApi.find({
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

      const { amount, type, interval } =
        await this.service.getCheckoutAttributes({
          id: uuid,
        });

      const paymentIntent = await billingPaymentIntentApi.create({
        data: {
          amount,
          interval,
          type,
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

      await subjectsToBillingModulePaymentIntentsApi.create({
        data: {
          subjectId: subject.id,
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

      const ordersToBillingModulePaymentIntents =
        await ordersToBillingModulePaymentIntentsApi.find({
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

      if (ordersToBillingModulePaymentIntents?.length) {
        for (const orderToBillingModulePaymentIntent of ordersToBillingModulePaymentIntents) {
          await ordersToBillingModulePaymentIntentsApi.delete({
            id: orderToBillingModulePaymentIntent.id,
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

      await billingPaymentIntentApi.provider({
        id: paymentIntent.id,
        data: {
          provider,
          metadata,
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

      const entity = await this.service.update({
        id: uuid,
        data: {
          ...existing,
          status: "paying",
        },
      });

      await broadcastChannelApi.pushMessage({
        data: {
          channelName: "observer",
          payload: JSON.stringify({
            action: {
              type: "request",
              method: "POST",
              path: `/api/billing/payment-intents/${provider}/webhook`,
            },
            callback: {
              type: "request",
              method: "POST",
              path: `/api/ecommerce/orders/${uuid}/check`,
              headers: {
                "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
              },
            },
          }),
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

      const ordersToProducts = await ordersToProductsApi.find({
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

      let rolesToEcommerceModuleProducts:
        | IRolesToEcommerceModuleProducts[]
        | undefined;

      if (ordersToProducts?.length) {
        const products = await productApi.find({
          params: {
            filters: {
              and: [
                {
                  column: "id",
                  method: "inArray",
                  value: ordersToProducts?.map(
                    (orderToProduct) => orderToProduct.productId,
                  ),
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

        if (products?.length) {
          const productIds = products.map((product) => product.id);

          rolesToEcommerceModuleProducts =
            await rolesToEcommerceModuleProductsApi.find({
              params: {
                filters: {
                  and: [
                    {
                      column: "ecommerceModuleProductId",
                      method: "inArray",
                      value: productIds,
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
        }
      }

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

          if (templates?.length) {
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

      if (rbacSubjectsToEcommerceModuleOrders?.length) {
        for (const rbacSubjectToEcommerceModuleOrder of rbacSubjectsToEcommerceModuleOrders) {
          const rbacSubjectsToRoles = await rbacSubjectsToRolesApi.find({
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

          const existingRolesIds = rbacSubjectsToRoles?.map(
            (rbacSubjectToRole) => rbacSubjectToRole.roleId,
          );

          const productRolesIds = rolesToEcommerceModuleProducts?.map(
            (roleToEcommerceModuleProduct) =>
              roleToEcommerceModuleProduct.roleId,
          );

          if (entity?.status === "approving") {
            const newRolesIds = productRolesIds?.filter(
              (productRoleId) => !existingRolesIds?.includes(productRoleId),
            );

            if (newRolesIds?.length) {
              for (const newRoleId of newRolesIds) {
                await rbacSubjectsToRolesApi.create({
                  data: {
                    subjectId: rbacSubjectToEcommerceModuleOrder.subjectId,
                    roleId: newRoleId,
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
          } else if (
            entity?.status &&
            ["paying", "delivered"].includes(entity.status)
          ) {
            const removeRolesIds = productRolesIds?.filter((productRoleId) =>
              existingRolesIds?.includes(productRoleId),
            );

            if (removeRolesIds?.length) {
              for (const removeRoleId of removeRolesIds) {
                const rbacSubjectToRole = rbacSubjectsToRoles?.find(
                  (rbacSubjectToRole) =>
                    rbacSubjectToRole.roleId === removeRoleId,
                );

                if (!rbacSubjectToRole) {
                  continue;
                }

                await rbacSubjectsToRolesApi.delete({
                  id: rbacSubjectToRole.id,
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

          console.log(`🚀 ~ update ~ existingRolesIds:`, existingRolesIds);

          console.log(
            `🚀 ~ update ~ rbacSubjectsToRoles:`,
            rbacSubjectsToRoles,
          );

          console.log(
            `🚀 ~ update ~ rolesToEcommerceModuleProducts:`,
            rolesToEcommerceModuleProducts,
          );
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

  async check(c: Context, next: any): Promise<Response> {
    if (!RBAC_SECRET_KEY) {
      throw new HTTPException(400, {
        message: "RBAC secret key not found",
      });
    }

    const uuid = c.req.param("uuid");

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

    const ordersToBillingModulePaymentIntents =
      await ordersToBillingModulePaymentIntentsApi.find({
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

    if (!ordersToBillingModulePaymentIntents?.length) {
      throw new HTTPException(404, {
        message: "Orders to billing module payment intents not found",
      });
    }

    const paymentIntents = await billingPaymentIntentApi.find({
      params: {
        filters: {
          and: [
            {
              column: "id",
              method: "inArray",
              value: ordersToBillingModulePaymentIntents.map(
                (order) => order.billingModulePaymentIntentId,
              ),
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

    if (!paymentIntents?.length) {
      throw new HTTPException(404, {
        message: "Payment intents not found",
      });
    }

    const paymentIntentIsSucceeded = paymentIntents.find((paymentIntent) => {
      return paymentIntent.status === "succeeded";
    });

    if (!paymentIntentIsSucceeded) {
      throw new HTTPException(400, {
        message: "Payment intent is not succeeded",
      });
    }

    const order = await api.update({
      id: uuid,
      data: {
        status: "approving",
        type: "history",
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
      data: order,
    });
  }
}
