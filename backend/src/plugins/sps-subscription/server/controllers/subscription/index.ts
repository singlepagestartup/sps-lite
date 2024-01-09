/**
 * subscription controller
 */

import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

const uid = "plugin::sps-subscription.subscription";
export default factories.createCoreController(uid, ({ strapi }) => ({
  async create(ctx) {
    const { data } = parseBody(ctx);

    const { data: subscription } = await super.create(ctx);

    const subscriptionInvoice = await strapi
      .service(uid)
      .checkout({ id: subscription.id });

    await strapi.service(uid).update(subscription.id, {
      data: {
        status: "payment",
      },
    });

    const sanitizedInvoice = await strapi
      .controller("plugin::sps-billing.invoice")
      .sanitizeOutput(subscriptionInvoice, ctx);

    return (
      strapi
        .controller("plugin::sps-billing.invoice")
        // @ts-ignore
        .transformResponse(sanitizedInvoice)
    );
  },
}));
