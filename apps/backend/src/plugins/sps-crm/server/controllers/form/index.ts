/**
 * invoice controller
 */

import { factories } from "@strapi/strapi";
import { parseBody } from "../../utils/transformers/transform";

export default factories.createCoreController(
  "plugin::sps-crm.form",
  ({ strapi }) => ({
    async submit(ctx) {
      const parsed = parseBody(ctx);
      const { data, files } = parsed as any;

      const formRequest = await strapi
        .service("plugin::sps-crm.form-request")
        .create({
          data: { ...data, form: ctx.params.id },
          files,
        });

      return { ok: true };
    },
  }),
);
