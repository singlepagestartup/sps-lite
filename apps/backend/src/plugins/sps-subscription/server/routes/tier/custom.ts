export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/tiers/:id/subscribe",
      handler: "tier.subscribe",
      config: {
        middlewares: ["global::pass-email-user-to-body"],
      },
    },
  ],
};
