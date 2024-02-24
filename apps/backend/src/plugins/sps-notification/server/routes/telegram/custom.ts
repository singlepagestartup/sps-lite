export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/telegram/webhook",
      handler: "telegram.webhook",
      config: {
        policies: [],
        middlewares: ["plugin::sps-notification.create-webhook"],
      },
    },
  ],
};
