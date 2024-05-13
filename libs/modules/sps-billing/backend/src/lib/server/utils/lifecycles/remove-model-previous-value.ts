async function removeModelPreviousValue({ event }) {
  const modelName = event.model.uid.split(".")[1];
  const id = event.params.where.id;
  // @ts-ignore
  if (strapi.actions && strapi.actions[modelName]) {
    // @ts-ignore
    return delete strapi.actions[modelName][id];
  }

  return;
}

export default removeModelPreviousValue;
