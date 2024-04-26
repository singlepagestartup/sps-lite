/**
 * subscription service
 */

const { ValidationError } = require("@strapi/utils").errors;
import { factories } from "@strapi/strapi";

const uid = "plugin::sps-subscription.subscription";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async checkout({ id }: { id: number }) {
    const invoiceAmount = await strapi.service(uid).getTotalAmount({ id });

    const invoice = await strapi.service("plugin::sps-billing.invoice").create({
      data: {
        subscription: id,
        amount: invoiceAmount,
      },
    });

    return invoice;
  },

  async getTotalAmount({ id }: { id: number }) {
    const subscription = await strapi.service(uid).findOne(id, {
      populate: {
        tier: {
          populate: "*",
        },
      },
    });

    if (!subscription.tier) {
      throw new ValidationError(
        `Subscription with id ${subscription.id} doesn't have tier`,
      );
    }

    const {
      results: [tierPriceAttribute],
    } = await strapi.service("plugin::sps-subscription.attribute").find({
      filters: {
        tiers: { id: { $in: [subscription.tier.id] } },
        attribute_key: {
          key: "price",
        },
      },
      populate: "*",
    });

    if (!tierPriceAttribute || !tierPriceAttribute.attribute_key) {
      throw new ValidationError(
        `Tier with id ${subscription.tier.id} doesn't have price attribute`,
      );
    }

    const totalAmount =
      tierPriceAttribute[tierPriceAttribute.attribute_key.type];

    return totalAmount;
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
