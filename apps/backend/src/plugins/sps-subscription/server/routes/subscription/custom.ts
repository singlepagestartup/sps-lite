export default {
  type: "content-api",
  routes: [
    {
      method: "PUT",
      path: "/subscriptions/update-by-email",
      handler: "subscription.updateByEmail",
    },
    {
      method: "GET",
      path: "/subscriptions/unsubscribe",
      handler: "subscription.unsubscribe",
    },
  ],
};
