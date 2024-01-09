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
      const user = filledInvoice.subscription.user;

      const emailSettings: any = strapi.config.get("plugin.email");

      await strapi.plugins["email"].services.email.send({
        to: user.email,
        from:
          emailSettings.settings?.defaultFrom?.email ||
          emailSettings.settings?.defaultFrom ||
          "no-reply@mail.singlepagestartup.com",
        replyTo:
          emailSettings.settings?.defaultReplyTo ||
          "support@singlepagestartup.com",
        subject: `${emailSettings.appName} | Successfull subscription #${filledInvoice.subscription.id}`,
        html: `<p>Hi ${user.username}</p>`,
      });
    }
  },
}));
