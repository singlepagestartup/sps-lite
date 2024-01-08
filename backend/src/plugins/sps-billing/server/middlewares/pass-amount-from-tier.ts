import { parseBody } from "../utils/transformers/transform";
import passValueToBody from "../utils/middlewares/pass-value-to-body";

export default () => {
  return async (ctx, next) => {
    const { data } = parseBody(ctx);

    if (data.tier?.id) {
      const tier = await strapi
        .service("plugin::sps-subscription.tier")
        .findOne(data.tier.id);

      passValueToBody({ ctx, key: "amount", value: tier.price });
    }

    await next();
  };
};
