import "reflect-metadata";
import { inject, injectable } from "inversify";
import { DI, RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/ecommerce/models/order/backend/repository/database";
import { Service } from "./service";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { api as billingPaymentIntent } from "@sps/billing/models/payment-intent/sdk/server";
import { api as ordersToProducts } from "@sps/ecommerce/relations/orders-to-products/sdk/server";
import { api as productsToAttributes } from "@sps/ecommerce/relations/products-to-attributes/sdk/server";
import { api as attributesToAttributeKeys } from "@sps/ecommerce/relations/attributes-to-attribute-keys/sdk/server";
import { api as attribute } from "@sps/ecommerce/models/attribute/sdk/server";
import { IModel as IAttribute } from "@sps/ecommerce/models/attribute/sdk/model";
import { api as attributeKeys } from "@sps/ecommerce/models/attribute-key/sdk/server";
import { SPS_RBAC_SECRET_KEY } from "@sps/shared-utils";
import { api as ordersToBillingPaymentIntents } from "@sps/ecommerce/relations/orders-to-billing-payment-intents/sdk/server";

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

  public async checkout(c: Context, next: any): Promise<Response> {
    try {
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

      const provider = data["provider"] ?? "stripe";

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
            "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
            "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
              "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
          const productPriceAttributes = await attributesToAttributeKeys.find({
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
                "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
                "X-RBAC-SECRET-KEY": SPS_RBAC_SECRET_KEY,
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
          provider,
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

      const orderToBillingPaymentIntent =
        await ordersToBillingPaymentIntents.create({
          data: {
            orderId: uuid,
            billingPaymentIntentId: paymentIntent.id,
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
