module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "XXXXXXXXXXX"),
    },
  },
  rateLimit: {
    enabled: process.env.NODE_ENV === "production",
  },
  watchIgnoreFiles: [
    "**/seeds/**",
    "**/**.spec.ts",
    "**/seeded.txt",
    "**/tests/**",
  ],
});
