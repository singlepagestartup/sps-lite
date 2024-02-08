export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/orders/:id/checkout",
      handler: "order.checkout",
      config: {
        middlewares: ["global::pass-email-user-to-body"],
      },
    },
  ],
};
