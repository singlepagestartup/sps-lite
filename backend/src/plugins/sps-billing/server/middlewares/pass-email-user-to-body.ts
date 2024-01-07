import { parseBody } from "../utils/transformers/transform";
import passValueToBody from "../utils/middlewares/pass-value-to-body";

export default () => {
  return async (ctx, next) => {
    const { data } = parseBody(ctx);

    if (data.email) {
      const user = await strapi
        .service("plugin::users-permissions.user")
        .findOrCreate({ email: data.email, username: data.email });

      passValueToBody({ ctx, key: "user", value: user });
    }

    await next();
  };
};
