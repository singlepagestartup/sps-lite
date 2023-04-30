async function removeModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];
  const id = event.params.where.id;
  if (strapi.actions && strapi.actions[modelName]) {
    return delete strapi.actions[modelName][id];
  }
}

module.exports = removeModelPreviousValue;
