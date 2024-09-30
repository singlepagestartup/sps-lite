import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/ecommerce/models/order/backend/repository/database";
import { api as orderApi } from "@sps/ecommerce/models/order/sdk/server";
import { api as ordersToBillingModulePaymentIntentsApi } from "@sps/ecommerce/relations/orders-to-billing-module-payment-intents/sdk/server";
import { RBAC_SECRET_KEY } from "@sps/shared-utils";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async clearOldOrders() {
    try {
      if (!RBAC_SECRET_KEY) {
        throw new Error("RBAC_SECRET_KEY is not defined");
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
    } catch (error) {
      console.error("clearOldOrders", error);
    }
  }
}
