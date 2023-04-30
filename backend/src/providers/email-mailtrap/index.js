"use strict";

// Public node modules.
const nodemailer = require("nodemailer");
const { removeUndefined } = require("@strapi/utils");

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: providerOptions.user || "",
        pass: providerOptions.password || "",
      },
    });

    return {
      send: (options) => {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } =
            options;

          let msg = {
            from: from || settings.defaultFrom,
            to,
            cc,
            bcc,
            replyTo: replyTo || settings.defaultReplyTo,
            subject,
            text,
            html,
            ...rest,
          };

          transport.sendMail(removeUndefined(msg), (err, info) => {
            if (err) {
              console.log("[strapi-provider-email-mailtrap] err", err);
              reject(err);
            } else {
              console.log(
                "[strapi-provider-email-mailtrap] Mail sent. Id: ",
                info.messageId,
              );
              resolve();
            }
          });
        });
      },
    };
  },
};
