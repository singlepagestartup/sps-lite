export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/products/:id/single-step-checkout",
      handler: "product.singleStepCheckout",
      config: {
        middlewares: [
          "global::pass-email-user-to-body",
          "plugin::sps-ecommerce.pass-user-cart-to-body",
        ],
      },
    },
    {
      method: "POST",
      path: "/products/:id/increment-in-cart",
      handler: "product.incrementInCart",
      config: {
        middlewares: [
          "global::pass-anonymus-username-user-to-body",
          "plugin::sps-ecommerce.pass-user-cart-to-body",
        ],
      },
    },
    {
      method: "POST",
      path: "/products/:id/decrement-in-cart",
      handler: "product.decrementInCart",
      config: {
        middlewares: [
          "global::pass-anonymus-username-user-to-body",
          "plugin::sps-ecommerce.pass-user-cart-to-body",
        ],
      },
    },
    {
      method: "POST",
      path: "/products/:id/remove-from-cart",
      handler: "product.removeFromCart",
      config: {
        middlewares: [
          "global::pass-anonymus-username-user-to-body",
          "plugin::sps-ecommerce.pass-user-cart-to-body",
        ],
      },
    },
  ],
};
