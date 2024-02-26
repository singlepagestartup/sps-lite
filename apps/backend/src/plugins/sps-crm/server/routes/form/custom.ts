export default {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/forms/:id/submit",
      handler: "form.submit",
    },
  ],
};
