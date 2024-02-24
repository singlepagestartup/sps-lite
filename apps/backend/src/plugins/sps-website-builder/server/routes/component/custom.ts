export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/components/:component/:id",
      handler: "component.findOneByUid",
    },
    {
      method: "GET",
      path: "/components/:component",
      handler: "component.findByUid",
    },
  ],
};
