export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/pages/get-by-url",
      handler: "page.getByUrl",
    },
    {
      method: "GET",
      path: "/pages/get-urls",
      handler: "page.getUrls",
    },
  ],
};
