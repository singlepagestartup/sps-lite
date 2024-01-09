async function deleteAllEntites(uid) {
  const entites = await strapi.entityService.findMany(uid); //?
  if (typeof entites === "object") {
    if (Array.isArray(entites)) {
      for (const entity of entites) {
        await strapi.entityService.delete(uid, entity.id);
      }
    } else {
      await strapi.entityService.delete(uid, entites.id);
    }
  }
}

module.exports = deleteAllEntites;
