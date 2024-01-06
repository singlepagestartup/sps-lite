/**
 * telegram controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "plugin::sps-notification.telegram",
  ({ strapi }) => ({
    async webhook() {
      return { data: "ok" };
    },
  }),
);
