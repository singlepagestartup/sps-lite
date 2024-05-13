/**
 * attribute service
 */

import { factories } from "@strapi/strapi";

import findOrCreate from "../../utils/services/find-or-create";

const uid = "plugin::sps-ecommerce.attribute";

export default factories.createCoreService(uid, ({ strapi }) => ({
  async create(params) {
    console.log("🚀 ~ find ~ params:", params);
  },

  async findOrCreate(params) {
    const schema = strapi.plugin("sps-ecommerce").contentTypes.attribute;

    return await findOrCreate(params, { uid, schema });
  },

  async removeRelations(params) {
    const { id, query = {}, data } = params;

    let entity = await strapi.service(uid).findOne(id, {
      populate: "*",
    });

    for (const [key, value] of Object.entries(entity) as any) {
      if (Array.isArray(data[key])) {
        const updatedValue = value.filter(
          (v) => !data[key].map((k) => k.id).includes(v.id),
        );

        entity = await strapi.service(uid).update(entity.id, {
          data: {
            [key]: updatedValue,
          },
          populate: query.populate,
        });
      }
    }

    return entity;
  },
}));
