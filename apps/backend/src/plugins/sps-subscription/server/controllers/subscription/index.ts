/**
 * subscription controller
 */

const { ValidationError } = require("@strapi/utils").errors;
import jsonwebtoken from "jsonwebtoken";
import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

const uid = "plugin::sps-subscription.subscription";
export default factories.createCoreController(uid, ({ strapi }) => ({
  async unsubscribe(ctx) {
    const { sign } = ctx.query;

    let toCancelSubscriptionsIds;
    try {
      toCancelSubscriptionsIds = jsonwebtoken.verify(
        sign,
        strapi.plugin("sps-subscription").config("JWT_SECRET"),
      );
    } catch (error) {
      throw new ValidationError("Invalid signature");
    }

    if (toCancelSubscriptionsIds.length) {
      for (const id of toCancelSubscriptionsIds) {
        await strapi.service(uid).update(id, {
          data: {
            status: "canceled",
          },
        });
      }
    }

    const FRONTEND_URL = strapi
      .plugin("sps-subscription")
      .config("FRONTEND_URL");

    return ctx.redirect(`${FRONTEND_URL}`);
  },

  async updateByEmail(ctx) {
    const { data } = parseBody(ctx);

    const { results: activeSubscriptions } = await strapi.service(uid).find({
      filters: {
        status: {
          $not: "canceled",
        },
        user: {
          email: data.email,
        },
      },
      populate: "*",
    });

    if (!activeSubscriptions.length) {
      throw new ValidationError(
        `User with email ${data.email} doesn't have active subscriptions`,
      );
    }

    const activeSubscriptionsIds = activeSubscriptions.map(
      (subscription) => subscription.id,
    );

    const sign = jsonwebtoken.sign(
      JSON.stringify(activeSubscriptionsIds),
      strapi.plugin("sps-subscription").config("JWT_SECRET"),
    );

    const BACKEND_URL = strapi.plugin("sps-subscription").config("BACKEND_URL");

    const cancelEmailNotification = await strapi
      .service("plugin::sps-notification.notification")
      .create({
        data: {
          user: activeSubscriptions[0].user,
          title: "Cancel your subscription",
          html: `<a href="${BACKEND_URL}/api/sps-subscription/subscriptions/unsubscribe?sign=${sign}">Unsubscribe</a>`,
        },
      });

    return { data };
  },
}));
