const { composePlugins, withNx } = require("@nx/rspack");

module.exports = composePlugins(withNx(), (config, { options, context }) => {
  return config;
});
