async function setModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];

  if (!strapi.actions) {
    strapi.actions = {};
  }

  if (!strapi.actions[modelName]) {
    strapi.actions[modelName] = {};
  }
  const id = event.params.where.id;
  if (id) {
    const before = await strapi.entityService.findOne(event.model.uid, id);
    strapi.actions[modelName][id] = { before };
  }
}

module.exports = setModelPreviousValue;
