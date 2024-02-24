module.exports = (plugin) => {
  plugin.controllers.user = {
    ...plugin.controllers.user,
    ...require("./controllers/user"),
  };

  plugin.services.user = plugin.services.user({ strapi });
  plugin.services.user = {
    ...plugin.services.user,
    ...require("./services/user"),
  };

  return plugin;
};
