/**
 * cart controller
 */

import { factories } from "@strapi/strapi";

const uid = "plugin::sps-ecommerce.cart";
export default factories.createCoreController(uid, ({ strapi }) => ({
  async checkout(ctx) {
    const { id } = ctx.params;

    const cartInvoice = await strapi.service(uid).checkout({ id });

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
}));
