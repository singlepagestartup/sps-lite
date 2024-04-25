async function getModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];
  const id = event.params.where.id;

  try {
    // @ts-ignore
    const before = strapi.actions[modelName][id]?.before;

    return before;
  } catch (error: any) {
    console.log("getModelPreviousValue", error.message);
  }
}

export default getModelPreviousValue;
