const assignFilterKeys = require("../assign-filter-keys");

/**
 *
 * @param {object} params - strapi service params (data, populate) and special config
 * Example config:
 * {
 *   title: 'alias'
 *   |      |-- form passed data object
 *   |-- model param from schema
 * }
 * @param {strign} uid - strapi model name 'api::ticker.ticker'
 * @param {object} schema - strapi model schema
 * @returns {object} created entity
 *
 * @usage
 * const schema = require('../content-types/ticker/schema.json');
 * const uid = 'api::ticker.ticker';
 *
 * ...
 *      const data = {
 *          anotherServiceAlias: 'usd'
 *      };
 *      const config = {
 *          alias: 'anotherServiceAlias'
 *      }
 *      await findOrCreate({data, config}, { uid, schema });
 */
async function findOrCreate(params, { uid, schema }) {
  const populate = params.populate; //?

  const filters = assignFilterKeys({
    schema,
    config: params.config,
    data: params.data,
  }); //?
  const data = params.data;

  const entities = await strapi.entityService.findMany(uid, {
    populate: "*",
    filters,
  }); //?
  let entity = entities.length ? entities[0] : undefined; //?
  if (!entity) {
    entity = await strapi.entityService.create(uid, { populate, data });
  }

  for (const [key, value] of Object.entries(entity)) {
    if (Array.isArray(data[key])) {
      const updatedValue = [...value, ...data[key]];
      await strapi.entityService.update(uid, entity.id, {
        data: {
          [key]: updatedValue,
        },
        populate,
      });
    }
  }

  const populatedEntity = await strapi.entityService.findOne(uid, entity.id, {
    populate,
  });

  return populatedEntity;
}

module.exports = findOrCreate;
