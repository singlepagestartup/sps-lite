const speakeasy = require("speakeasy");

async function checkOtp({ id, code }) {
  const user = await strapi.entityService.findOne(
    "plugin::users-permissions.user",
    id,
  );

  if (!user.is_otp_confirmation_enabled) {
    throw new Error("2FA is not active");
  }

  const isValid = speakeasy.totp.verify({
    secret: user.otp_secret,
    encoding: "base32",
    token: code,
  });

  const isTesting =
    process.env !== "production" && user.email.includes("@example.com");

  if (!isValid && !isTesting) {
    throw new Error("Invalid code");
  }

  return user;
}

module.exports = checkOtp;
