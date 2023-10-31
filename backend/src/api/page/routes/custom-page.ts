export default {
  routes: [
    {
      method: "GET",
      path: "/pages/get-by-url",
      handler: "page.getByUrl",
      config: {},
    },
    {
      method: "GET",
      path: "/pages/get-urls",
      handler: "page.getUrls",
      config: {},
    },
  ],
};
