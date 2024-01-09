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
        subscription: subscription.id,
        amount: invoiceAmount,
      },
    });

    return invoice;
  },
  async onSuccessPayment({ invoice }: { invoice: any }) {
    const filledInvoice = await strapi
      .service("plugin::sps-billing.invoice")
      .findOne(invoice.id, {
        populate: {
          subscription: {
            populate: "*",
          },
        },
      });

    await strapi.service(uid).update(filledInvoice.subscription.id, {
      data: {
        status: "paid",
      },
    });

    if (filledInvoice.subscription?.user) {
      const notification = await strapi
        .service("plugin::sps-notification.notification")
        .create({
          data: {
            user: filledInvoice.subscription.user.id,
            title: `Successfull subscription #${filledInvoice.subscription.id}`,
          },
        });
    }
  },
}));
