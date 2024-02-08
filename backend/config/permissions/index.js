const spsLite = require("./sps-lite");
const startup = require("./startup");

module.exports = () => ({
  authenticated: {
    role: 1,
    actions: {
      ...spsLite.authenticated,
      ...startup.authenticated,
    },
  },
  public: {
    role: 2,
    actions: {
      ...spsLite.public,
      ...startup.public,
    },
  },
});
