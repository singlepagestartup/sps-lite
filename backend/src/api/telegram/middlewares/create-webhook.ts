export default (config, { strapi }) => {
  return async (context, next) => {
    await strapi.telegram.bot.handleUpdate(context.request.body);
    await next();
  };
};
