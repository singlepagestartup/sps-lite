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
    {
      method: "POST",
      path: "/products/:id/add-to-cart",
      handler: "product.addToCart",
      config: {
        middlewares: ["global::pass-anonymus-username-user-to-body"],
      },
    },
  ],
};
