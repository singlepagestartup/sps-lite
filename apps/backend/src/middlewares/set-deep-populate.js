const { getDeepPopulate } = require("../utils/get-deep-populate");

/**
 * Функция устанавливает deep populate для модели
 */
module.exports = () => {
  return async (ctx, next) => {
    const modelName = ctx.state.route.info.apiName;
    const uid = `api::${modelName}.${modelName}`;
    const populate = getDeepPopulate(uid);
    ctx.query = { ...ctx.query, populate };

    await next();
  };
};
