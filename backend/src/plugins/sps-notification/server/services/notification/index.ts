/**
 * notification service
 */

import { factories } from "@strapi/strapi";

const uid = "plugin::sps-notification.notification";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async create(params) {
    const result = await super.create(params);

    const filledNotification = await strapi.service(uid).findOne(result.id, {
      populate: "*",
    });

    if (filledNotification.user?.email) {
      const user = filledNotification.user;

      const emailSettings: any = strapi.config.get("plugin.email");

      const html = filledNotification.html || filledNotification.title;

      await strapi.plugins["email"].services.email.send({
        to: user.email,
        from:
          emailSettings.settings?.defaultFrom?.email ||
          emailSettings.settings?.defaultFrom ||
          "no-reply@mail.singlepagestartup.com",
        replyTo:
          emailSettings.settings?.defaultReplyTo ||
          "support@singlepagestartup.com",
        subject: result.title,
        html,
      });
    }

    return result;
  },
}));
