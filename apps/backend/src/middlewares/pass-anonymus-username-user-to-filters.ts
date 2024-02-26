export default () => {
  return async (ctx, next) => {
    if (ctx.request.headers.jwt) {
      await next();
      return;
    }

    if (ctx.request.headers?.["anonymus-username"]) {
      const username = ctx.request.headers["anonymus-username"];
      const users = await strapi
        .service("plugin::users-permissions.user")
        .fetchAll({
          filters: { email: `${username}@example.com`, username: username },
        });

      if (!users.length) {
        return false;
      }

      ctx.query = {
        ...ctx.query,
        filters: { ...ctx.query.filters, user: users[0].id },
      };
    }

    await next();
  };
};
