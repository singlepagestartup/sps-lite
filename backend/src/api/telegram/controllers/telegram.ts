/**
 * telegram controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::telegram.telegram",
  ({ strapi }) => ({
    async webhook(ctx) {
      console.log("🚀 ~ webhook ~ ctx:", ctx);

      return { data: "ok" };
    },
  }),
);
