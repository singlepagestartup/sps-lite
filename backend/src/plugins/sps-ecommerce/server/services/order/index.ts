/**
 * order service
 */

import { factories } from "@strapi/strapi";
import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.order";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes.order;

    return await findOrCreate(params, { uid, schema });
  },
}));
