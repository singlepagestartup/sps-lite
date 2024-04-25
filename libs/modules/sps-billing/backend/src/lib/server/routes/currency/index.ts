/**
 * currency router
 */

// import { factories } from "@strapi/strapi";

// export default factories.createCoreRouter(
//   "plugin::sps-billing-plugin.currency",
// );

const routes = [
  {
    method: "GET",
    path: "/currency",
    handler: "currency.find",
  },
  {
    method: "GET",
    path: "/currency/:id",
    handler: "currency.findOne",
  },
  {
    method: "POST",
    path: "/currency",
    handler: "currency.create",
  },
  {
    method: "PUT",
    path: "/currency/:id",
    handler: "currency.update",
  },
  {
    method: "DELETE",
    path: "/currency/:id",
    handler: "currency.delete",
  },
];

export default { type: "content-api", routes };
