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

      const updatedOrder = await strapi
        .service("plugin::sps-ecommerce.order")
        .update(order.id, {
          data: {
            products: [id],
          },
        });

      const {
        results: [productPriceAttribute],
      } = await strapi.service("plugin::sps-ecommerce.attribute").find({
        filters: {
          products: { id: { $in: [id] } },
          attribute_key: {
            key: "price",
          },
        },
        populate: "*",
      });

      if (!productPriceAttribute || !productPriceAttribute.attribute_key) {
        throw new ValidationError("Product doesn't have price attribute");
      }

      const invoice = await strapi
        .service("plugin::sps-billing.invoice")
        .create({
          data: {
            user: data.user,
            orders: [updatedOrder],
            amount:
              productPriceAttribute[productPriceAttribute.attribute_key.type],
          },
        });

      // change order status "cart" -> "payment"
      // detach cart
      await strapi
        .service("plugin::sps-ecommerce.order")
        .update(updatedOrder.id, {
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
