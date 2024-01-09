/**
 * subscription service
 */

import { factories } from "@strapi/strapi";

const uid = "plugin::sps-subscription.subscription";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async checkout({ id }: { id: number }) {
    const subscription = await strapi.service(uid).findOne(id, {
      populate: "*",
    });

    const invoiceAmount = subscription.tier.price;

    const invoice = await strapi.service("plugin::sps-billing.invoice").create({
      data: {
        user: subscription.user,
        subscription: subscription.id,
        amount: invoiceAmount,
      },
    });

    return invoice;
  },
}));
