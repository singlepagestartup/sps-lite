export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/carts/:id/checkout",
      handler: "cart.checkout",
      config: {
        middlewares: ["global::pass-email-user-to-body"],
      },
    },
  ],
};
