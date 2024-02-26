export default (config, { strapi }) => {
  return async (context, next) => {
    if (!strapi.telegram?.bot) {
      return;
    }

    await strapi.telegram.bot.handleUpdate(context.request.body);
    await next();
  };
};
