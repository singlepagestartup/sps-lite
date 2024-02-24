async function setModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];

  // @ts-ignore
  if (!strapi.actions) {
    // @ts-ignore
    strapi.actions = {};
  }

  // @ts-ignore
  if (!strapi.actions[modelName]) {
    // @ts-ignore
    strapi.actions[modelName] = {};
  }
  const id = event.params.where.id;
  if (id) {
    const before = await strapi.entityService.findOne(event.model.uid, id);
    // @ts-ignore
    strapi.actions[modelName][id] = { before };
  }
}

export default setModelPreviousValue;
