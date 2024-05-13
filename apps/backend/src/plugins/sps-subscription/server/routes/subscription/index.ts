/**
 * subscription router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "plugin::sps-subscription.subscription",
  {
    config: {
      create: {
        middlewares: ["global::pass-email-user-to-body"],
      },
    },
  },
);
