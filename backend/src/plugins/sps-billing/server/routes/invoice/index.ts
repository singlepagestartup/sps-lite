/**
 * invoice router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("plugin::sps-billing.invoice", {
  config: {
    create: {
      middlewares: [
        "plugin::sps-billing.pass-amount-from-tier",
        "plugin::sps-billing.pass-email-user-to-body",
      ],
    },
  },
});
