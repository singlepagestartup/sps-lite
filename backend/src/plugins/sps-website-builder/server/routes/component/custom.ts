export default {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/components/:component/:id",
      handler: "component.findOneByUid",
    },
  ],
};
