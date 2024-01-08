export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/products/:id/single-step-checkout",
      handler: "product.singleStepCheckout",
      config: {
        middlewares: ["global::pass-email-user-to-body"],
      },
    },
  ],
};
