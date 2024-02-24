const setPermissions = async () => {
  const queryKey = "plugin::users-permissions.permission";

  const currentPermissions = await strapi.query(queryKey).findMany();

  const configPermissions = strapi.config.get("permissions");

  const toDelete = currentPermissions.map(({ action }) => action);

  console.log("currentPermissions", toDelete.length);
  const toCreate = Object.values(configPermissions).flatMap(
    ({ role, actions }) =>
      Object.entries(actions)
        .filter(([key, arr]) => arr.length)
        .flatMap(([key, arr]) =>
          arr.flatMap((val) => ({ action: `${key}.${val}`, role })),
        ),
  );

  for (const item of toDelete) {
    await strapi.query(queryKey).delete({ where: { action: item } });
  }

  for (const item of toCreate) {
    await strapi.query(queryKey).create({ data: item });
  }

  const updatedPermissions = await strapi.query(queryKey).findMany();

  console.log("updated", updatedPermissions.length);
};

module.exports = setPermissions;
