async function getModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];
  const id = event.params.where.id;

  try {
    const before = strapi.actions[modelName][id]?.before;

    return before;
  } catch (error) {
    console.log("getModelPreviousValue", error.message);
  }
}

module.exports = getModelPreviousValue;
