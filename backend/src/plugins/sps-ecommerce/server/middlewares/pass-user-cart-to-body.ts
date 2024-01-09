import passValueToBody from "../utils/middlewares/pass-value-to-body";
import { parseBody } from "../utils/transformers/transform";

export default () => {
  return async (ctx, next) => {
    const { data } = parseBody(ctx);

    if (data.user) {
      const cartConfig = {
        user: "user",
      };

      const cart = await strapi
        .service("plugin::sps-ecommerce.cart")
        .findOrCreate({
          data: {
            user: data.user,
            publishedAt: new Date().toISOString(),
          },
          config: cartConfig,
        });

      passValueToBody({ ctx, key: "cart", value: cart });
    }

    await next();
  };
};
