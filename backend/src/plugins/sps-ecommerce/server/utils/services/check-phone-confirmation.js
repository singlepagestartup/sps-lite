async function checkPhoneConfirmation({ code, id, ctx }) {
  const user = await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    id,
  );

  const isTesting =
    process.env !== "production" && user.email.includes("@example.com");

  if (user.phone_confirmation_token !== code && !isTesting) {
    throw new Error("Invalid code");
  } else {
    await strapi.entityService.update("plugin::users-permissions.user", id, {
      data: {
        phone_confirmation_token: null,
      },
    });
  }

  return user;
}

module.exports = checkPhoneConfirmation;
