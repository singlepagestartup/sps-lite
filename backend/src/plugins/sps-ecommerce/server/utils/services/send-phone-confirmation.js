const axios = require("axios");

async function sendPhoneConfirmation({ user, ctx }) {
  const appName = strapi.plugins["users-permissions"].config("appName");
  const smsConfig = strapi.plugins["users-permissions"].config("sms");
  const phone_confirmation_token = `${Math.floor(
    100000 + Math.random() * 900000,
  )}`;

  await strapi.entityService.update("plugin::users-permissions.user", user.id, {
    data: { phone_confirmation_token },
  });

  console.log("send sms code:", phone_confirmation_token);

  if (process.env.NODE_ENV === "production") {
    await axios({
      url: `https://api.prostor-sms.ru/messages/v2/send/?phone=${
        user.phone
      }&text=${encodeURI(
        `Code for ${appName}: ${phone_confirmation_token}`,
      )}&login=${smsConfig.login}&password=${smsConfig.password}`,
    }).catch((error) => {
      console.log("🚀 ~ sendPhoneConfirmation ~ error", error);
    });
  }
}

module.exports = sendPhoneConfirmation;
