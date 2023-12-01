const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  watchIgnoreFiles: [
    "**/seeds/**",
    "**/**.spec.ts",
    "**/seeded.txt",
    "**/tests/**",
  ],
});
