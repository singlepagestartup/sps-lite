/**
 * invoice service
 */

import { factories } from "@strapi/strapi";
import Provider from "../providers/Provider";

export default factories.createCoreService(
  "plugin::sps-billing.invoice",
  ({ strapi }) => ({
    async create(params) {
      const result = await super.create(params);
      const provider = new Provider({
        invoice: result,
      });
      await provider.proceed();

      return result;
    },
  }),
);
