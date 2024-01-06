const createDocumentFromTemplate = require("../utils/create-document-from-template");

async function sendToRecievers({ event, sideEffect, payload }) {
  const { result } = event;

  if (sideEffect.provider === "email") {
    const emailSettings = strapi.config.get("plugin.email");

    const template = await createDocumentFromTemplate({
      uid: payload.uid,
      params: payload,
    });

    let recievers = [];

    if (sideEffect.recievers) {
      for (const reciever of sideEffect.recievers) {
        if (reciever.identifier) {
          recievers.push(reciever.identifier);
        } else if (reciever.admin?.email) {
          recievers.push(reciever.admin.email);
        } else if (reciever.user?.email) {
          recievers.push(reciever.user.email);
        }
      }
    }

    recievers = [...new Set(recievers)];

    for (const reciever of recievers) {
      try {
        await strapi.plugins["email"].services.email.send({
          to: reciever,
          from:
            emailSettings.settings?.defaultFrom?.email ||
            emailSettings.settings?.defaultFrom ||
            "no-reply@mail.singlepagestartup.com",
          replyTo:
            emailSettings.settings?.defaultReplyTo ||
            "support@singlepagestartup.com",
          subject: `${emailSettings.appName} | New ${payload.uid} Request`,
          html: template,
        });
      } catch (error) {
        strapi.errorCatcher(error);
      }
    }
  }
}

module.exports = sendToRecievers;
