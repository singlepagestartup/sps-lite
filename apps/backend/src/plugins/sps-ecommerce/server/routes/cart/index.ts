/**
 * cart router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("plugin::sps-ecommerce.cart", {
  config: {
    find: {
      policies: ["global::jwt-or-anonymus-required"],
      middlewares: ["global::pass-anonymus-username-user-to-filters"],
    },
  },
});
