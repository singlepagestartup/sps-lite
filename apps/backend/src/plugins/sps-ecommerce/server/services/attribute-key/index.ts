/**
 * attribute-key service
 */

import { factories } from "@strapi/strapi";
import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.attribute-key";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes["attribute-key"];

    return await findOrCreate(params, { uid, schema });
  },
}));
