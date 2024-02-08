export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/invoices/:id/confirm",
      handler: "invoice.confirm",
    },
    {
      method: "POST",
      path: "/invoices/webhook",
      handler: "invoice.webhook",
    },
  ],
};
