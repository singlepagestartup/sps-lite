/**
 * order controller
 */

import { factories } from "@strapi/strapi";

const uid = "plugin::sps-ecommerce.order";

export default factories.createCoreController(uid, ({ strapi }) => ({
  async checkout(ctx: any) {
    const { id } = ctx.params;

    await strapi.service(uid).checkout({ id });

    const response = await super.findOne(ctx);

    return response;
  },
}));
