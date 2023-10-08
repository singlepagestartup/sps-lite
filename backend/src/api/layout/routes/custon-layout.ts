export default {
  routes: [
    {
      method: "GET",
      path: "/layouts/by-page-url",
      handler: "layout.findByPageUrl",
      config: {},
    },
  ],
};
