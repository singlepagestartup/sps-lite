const sendpulse = require("sendpulse-api");

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    sendpulse.init(
      providerOptions.user,
      providerOptions.secret,
      "sendpulse_token/",
      function (token) {
        if (token && token.is_error) {
          console.log("sendpulse providerOptions", providerOptions);
          console.log("sendpulse token", token);
          throw new Error("error in sendpulse token", token);
        }
      },
    );

    return {
      send: async (options) => {
        const email = {
          ...options,
          from: settings.defaultFrom,
          replyTo: settings.defaultReplyTo,
        };

        if (typeof email.to === "string") {
          email.to = [
            {
              email: email.to,
            },
          ];
        }

        return new Promise((resolve, reject) =>
          sendpulse.smtpSendMail(
            (dataOrError) =>
              dataOrError.is_error || dataOrError.error_code
                ? reject(dataOrError)
                : resolve(dataOrError),
            email,
          ),
        );
      },
      addEmails: async (options) => {
        const { addressBookId, emails } = options;

        return new Promise((resolve, reject) =>
          sendpulse.addEmails(
            (dataOrError) =>
              dataOrError.is_error || dataOrError.error_code
                ? reject(dataOrError)
                : resolve(dataOrError),
            addressBookId,
            emails,
          ),
        );
      },
    };
  },
};
