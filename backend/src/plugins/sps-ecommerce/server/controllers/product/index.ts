/**
 * product controller
 */

const { ValidationError } = require("@strapi/utils").errors;
import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

export default factories.createCoreController(
  "plugin::sps-ecommerce.product",
  ({ strapi }) => ({
    async incrementInCart(ctx) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      if (!data.quantity) {
        throw new ValidationError(
          "Missing 'quantity' payload in the request body",
        );
      }

      const quantity = parseInt(data.quantity);

      await strapi.service("plugin::sps-ecommerce.product").updateInCart({
        id,
        cart: data.cart,
        quantity: +quantity,
      });

      return data.cart;
    },

    async decrementInCart(ctx) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      if (!data.quantity) {
        throw new ValidationError(
          "Missing 'quantity' payload in the request body",
        );
      }

      const quantity = parseInt(data.quantity);

      await strapi.service("plugin::sps-ecommerce.product").updateInCart({
        id,
        cart: data.cart,
        quantity: -quantity,
      });

      return data.cart;
    },

    async removeFromCart(ctx) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      const { results: quantityAttributes } = await strapi
        .service("plugin::sps-ecommerce.attribute")
        .find({
          filters: {
            number: {
              $notNull: true,
            },
          },
        });

      const maximumQuantityValue = quantityAttributes.reduce(
        (acc, curr) => Math.max(acc, curr.number),
        0,
      );

      await strapi.service("plugin::sps-ecommerce.product").updateInCart({
        id,
        cart: data.cart,
        quantity: -maximumQuantityValue,
      });

      return data.cart;
    },

    async singleStepCheckout(ctx) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      // clear cart order
      // just current product should stay

      const filledCart = await strapi
        .service("plugin::sps-ecommerce.cart")
        .findOne(data.cart.id, {
          populate: "*",
        });

      const mutedOrders = [...filledCart.orders];
      for (const mutedOrder of mutedOrders) {
        await strapi
          .service("plugin::sps-ecommerce.order")
          .update(mutedOrder.id, {
            data: {
              cart: null,
            },
          });
      }

      const quantity = parseInt(data.quantity);

      await strapi.service("plugin::sps-ecommerce.product").updateInCart({
        id,
        cart: data.cart,
        quantity: +quantity,
      });

      const cartInvoice = await strapi
        .service("plugin::sps-ecommerce.cart")
        .checkout({ id: data.cart.id });

      const sanitizedInvoice = await strapi
        .controller("plugin::sps-billing.invoice")
        .sanitizeOutput(cartInvoice, ctx);

      return (
        strapi
          .controller("plugin::sps-billing.invoice")
          // @ts-ignore
          .transformResponse(sanitizedInvoice)
      );
    },
  }),
);
