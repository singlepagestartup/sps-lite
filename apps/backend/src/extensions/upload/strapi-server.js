const uploadServices = require("./services/upload");

module.exports = (plugin) => {
  plugin.services.upload = plugin.services.upload({ strapi });

  plugin.services.upload = { ...plugin.services.upload, ...uploadServices };
  return plugin;
};
