const urlJoin = require("url-join");
const { getAbsoluteServerUrl, sanitize } = require("@strapi/utils");

async function sendEmailConfirmation({ user, ctx }) {
  const userPermissionService = strapi
    .plugin("users-permissions")
    .service("users-permissions");
  const pluginStore = await strapi.store({
    type: "plugin",
    name: "users-permissions",
  });
  const userSchema = strapi.getModel("plugin::users-permissions.user");

  const settings = await pluginStore
    .get({ key: "email" })
    .then((storeEmail) => {
      const appName = strapi.plugins["email"].config("appName");
      const emailConfig = strapi.config.get("plugin.email");

      const settings = { ...storeEmail["email_confirmation"].options };
      if (settings?.from?.email && emailConfig?.settings?.defaultFrom) {
        settings.from.email = emailConfig.settings.defaultFrom;
        settings.from.name = appName || "Backend";
      }

      return settings;
    });

  // Sanitize the template's user information
  const sanitizedUserInfo = await sanitize.sanitizers.defaultSanitizeOutput(
    userSchema,
    user,
  );

  const confirmationToken = `${Math.floor(100000 + Math.random() * 900000)}`;

  await strapi.entityService.update("plugin::users-permissions.user", user.id, {
    data: { confirmationToken },
  });

  const apiPrefix = strapi.config.get("api.rest.prefix");
  settings.message = await userPermissionService.template(settings.message, {
    URL: urlJoin(
      getAbsoluteServerUrl(strapi.config),
      apiPrefix,
      "/auth/email-confirmation",
    ),
    USER: sanitizedUserInfo,
    CODE: confirmationToken,
  });

  settings.object = await userPermissionService.template(settings.object, {
    USER: sanitizedUserInfo,
  });

  if (sanitizedUserInfo.email?.includes("example.com")) {
    console.log(
      "🚀 ~ sendConfirmationEmail ~ confirmationToken",
      confirmationToken,
    );
    return;
  }

  // Send an email to the user.
  await strapi
    .plugin("email")
    .service("email")
    .send({
      to: user.email,
      from:
        settings.from.email && settings.from.name
          ? `${settings.from.name} <${settings.from.email}>`
          : undefined,
      replyTo: settings.response_email,
      subject: settings.object,
      text: settings.message,
      html: settings.message,
    })
    .then((res) => {
      console.log("sendConfirmationEmail", res);
    })
    .catch((err) => {
      console.log("sendConfirmationEmail err", err);
    });
}

module.exports = sendEmailConfirmation;
