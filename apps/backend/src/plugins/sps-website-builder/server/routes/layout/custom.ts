export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/layouts/by-page-url",
      handler: "layout.findByPageUrl",
      config: {},
    },
  ],
};
