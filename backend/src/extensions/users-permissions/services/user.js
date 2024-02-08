"use strict";

const findOrCreate = require("../../../utils/services/find-or-create");

module.exports = {
  async findOrCreate(props) {
    const schema = strapi.plugin("users-permissions").contentTypes.user;
    const uid = "plugin::users-permissions.user";
    const params = {
      config: {
        username: "username",
      },
      data: props,
    };

    return await findOrCreate(params, { uid, schema });
  },
};
