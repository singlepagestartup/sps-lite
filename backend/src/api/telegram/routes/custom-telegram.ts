export default {
  routes: [
    {
      method: "POST",
      path: "/telegram/webhook",
      handler: "telegram.webhook",
      config: {
        policies: [],
        middlewares: ["api::telegram.create-webhook"],
      },
    },
  ],
};
