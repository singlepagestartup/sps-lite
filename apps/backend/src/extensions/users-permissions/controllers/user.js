"use strict";

const utils = require("@strapi/utils");

module.exports = {
  async me(ctx) {
    const authUser = ctx.state.user;
    const { query } = ctx;

    if (!authUser && !ctx.request.headers?.["anonymus-username"]) {
      return ctx.unauthorized();
    }

    const schema = strapi.getModel("plugin::users-permissions.user");
    const { auth } = ctx.state;

    await utils.validate.contentAPI.query(query, schema, { auth });

    const sanitizedQuery = await utils.sanitize.contentAPI.query(
      query,
      schema,
      { auth },
    );

    let user;
    if (authUser) {
      user = await strapi
        .service("plugin::users-permissions.user")
        .fetch(authUser.id, sanitizedQuery);
    } else {
      const users = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        {
          filters: {
            username: ctx.request.headers["anonymus-username"],
          },
        },
      );

      if (!users.length) {
        return {};
      }

      user = users[0];
    }

    ctx.body = await utils.sanitize.contentAPI.output(user, schema, { auth });
  },
};
