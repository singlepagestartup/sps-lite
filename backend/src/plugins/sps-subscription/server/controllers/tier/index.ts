/**
 * tier controller
 */

import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

export default factories.createCoreController(
  "plugin::sps-subscription.tier",
  ({ strapi }) => ({
    async subscribe(ctx: any) {
      const { data } = parseBody(ctx);
      const { id } = ctx.params;

      const subscription = await strapi
        .service("plugin::sps-subscription.subscription")
        .create({
          data: {
            user: data.user,
            tier: id,
          },
        });

      const subscriptionInvoice = await strapi
        .service("plugin::sps-subscription.subscription")
        .checkout({ id: subscription.id });

      await strapi
        .service("plugin::sps-subscription.subscription")
        .update(subscription.id, {
          data: {
            status: "payment",
          },
        });

      const sanitizedInvoice = await strapi
        .controller("plugin::sps-billing.invoice")
        // @ts-ignore
        .sanitizeOutput(subscriptionInvoice, ctx);

      return (
        strapi
          .controller("plugin::sps-billing.invoice")
          // @ts-ignore
          .transformResponse(sanitizedInvoice)
      );
    },
  }),
);
