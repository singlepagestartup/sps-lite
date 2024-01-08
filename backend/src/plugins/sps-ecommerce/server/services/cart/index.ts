/**
 * cart service
 */

import { factories } from "@strapi/strapi";
import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.cart";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes.cart;

    return await findOrCreate(params, { uid, schema });
  },
}));
