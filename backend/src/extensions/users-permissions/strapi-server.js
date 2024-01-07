module.exports = (plugin) => {
  plugin.services.user = plugin.services.user({ strapi });
  plugin.services.user = {
    ...plugin.services.user,
    ...require("./services/user"),
  };

  return plugin;
};
