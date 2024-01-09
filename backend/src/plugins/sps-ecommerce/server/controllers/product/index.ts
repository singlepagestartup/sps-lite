/**
 * product controller
 */

import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

export default factories.createCoreController(
  "plugin::sps-ecommerce.product",
  ({ strapi }) => ({
    async addToCart(ctx) {
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

      await strapi.service("plugin::sps-ecommerce.product").addToCart({
        id,
        cart,
      });

      return cart;
    },

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

      await strapi.service("plugin::sps-ecommerce.product").addToCart({
        id,
        cart,
      });

      const invoice = await strapi
        .service("plugin::sps-ecommerce.cart")
        .createInvoice({
          id: cart.id,
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
