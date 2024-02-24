import passValueToBody from "../utils/middlewares/pass-value-to-body";

export default () => {
  return async (ctx, next) => {
    if (ctx.request.headers.jwt) {
      await next();
      return;
    }

    if (ctx.request.headers?.["anonymus-username"]) {
      const username = ctx.request.headers["anonymus-username"];
      const user = await strapi
        .service("plugin::users-permissions.user")
        .findOrCreate({ email: `${username}@example.com`, username: username });

      passValueToBody({ ctx, key: "user", value: user });
    }

    await next();
  };
};
