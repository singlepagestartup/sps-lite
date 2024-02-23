export default (ctx, config, { strapi }) => {
  const anonymusUsername = ctx.request.headers["anonymus-username"];
  const jwt = ctx.request.headers.jwt;

  if (!jwt && !anonymusUsername) {
    return false;
  }

  return true;
};
