/**
 * product controller
 */

const { ValidationError } = require("@strapi/utils").errors;
import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

export default factories.createCoreController(
  "plugin::sps-ecommerce.product",
  ({ strapi }) => ({
    async singleStepCheckout(ctx) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      const cartConfig = {
        user: "user",
      };

      const cart = await strapi
        .service("plugin::sps-ecommerce.cart")
        .findOrCreate({
          data: {
            user: data.user,
            publishedAt: new Date().toISOString(),
          },
          config: cartConfig,
        });

      const orderConfig = {
        cart: "cart",
        user: "user",
      };

      const order = await strapi
        .service("plugin::sps-ecommerce.order")
        .findOrCreate({
          data: {
            ...data,
            user: data.user,
            cart,
            publishedAt: new Date().toISOString(),
          },
          config: orderConfig,
        });

      const orderProduct = await strapi
        .service("plugin::sps-ecommerce.order-product")
        .create({
          data: {
            order: order,
            product: id,
          },
        });

      const quantityAttributeKeyConfig = {
        key: "key",
        type: "type",
      };
      const quantityAttributeKey = await strapi
        .service("plugin::sps-ecommerce.attribute-key")
        .findOrCreate({
          data: {
            title: "quantity",
            key: "quantity",
            type: "number",
          },
          config: quantityAttributeKeyConfig,
        });

      const quantityAttributeConfig = {
        attribute_key: "attribute_key",
        number: "number",
      };
      const quantityAttribute = await strapi
        .service("plugin::sps-ecommerce.attribute")
        .findOrCreate({
          data: {
            attribute_key: quantityAttributeKey,
            number: 1,
            type: "number",
            order_products: [orderProduct],
          },
          config: quantityAttributeConfig,
        });

      const invoiceAmount = await strapi
        .service("plugin::sps-ecommerce.order")
        .getTotalAmount({
          id: order.id,
        });

      const invoice = await strapi
        .service("plugin::sps-billing.invoice")
        .create({
          data: {
            user: data.user,
            orders: [order],
            amount: invoiceAmount,
          },
        });

      // change order status "cart" -> "payment"
      // detach cart
      await strapi.service("plugin::sps-ecommerce.order").update(order.id, {
        data: {
          status: "payment",
          cart: null,
        },
      });

      const sanitizedInvoice = await strapi
        .controller("plugin::sps-billing.invoice")
        .sanitizeOutput(invoice, ctx);

      return (
        strapi
          .controller("plugin::sps-billing.invoice")
          // @ts-ignore
          .transformResponse(sanitizedInvoice)
      );
    },
  }),
);
