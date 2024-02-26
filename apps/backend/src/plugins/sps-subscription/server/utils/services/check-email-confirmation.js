async function checkEmailConfirmation({ code, id, ctx }) {
  const user = await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    id,
  );

  const isTesting =
    process.env !== "production" && user.email.includes("@example.com");

  if (user.confirmationToken !== code && !isTesting) {
    throw new Error("Invalid code");
  } else {
    await strapi.entityService.update("plugin::users-permissions.user", id, {
      data: {
        confirmationToken: null,
      },
    });
  }

  return user;
}

module.exports = checkEmailConfirmation;
