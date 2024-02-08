import { parseBody } from "../utils/transformers/transform";
import passValueToBody from "../utils/middlewares/pass-value-to-body";

export default () => {
  return async (ctx, next) => {
    const { data } = parseBody(ctx);

    if (data.email) {
      const user = await strapi
        .service("plugin::users-permissions.user")
        .findOrCreate({
          email: data.email,
          username: data.email,
        });

      if (ctx.request.headers?.["anonymus-username"]) {
        const anonymuses = await strapi.entityService.findMany(
          "plugin::users-permissions.user",
          {
            filters: {
              username: ctx.request.headers["anonymus-username"],
            },
            populate: "*",
          },
        );

        if (anonymuses.length && anonymuses[0].id !== user.id) {
          const populatedUser = await strapi.entityService.findOne(
            "plugin::users-permissions.user",
            user.id,
            {
              populate: "*",
            },
          );

          const anonymus = anonymuses[0];
          await strapi.entityService.update(
            "plugin::users-permissions.user",
            user.id,
            {
              data: {
                orders: [...populatedUser.orders, ...anonymus.orders],
                cart: anonymus.cart,
              },
            },
          );

          await strapi.entityService.delete(
            "plugin::users-permissions.user",
            anonymus.id,
          );
        }
      }

      passValueToBody({ ctx, key: "user", value: user });
    }

    await next();
  };
};
