const { getOr } = require("lodash/fp");

const { sanitize } = require("@strapi/utils");
const { transformResponse } = require("../transformers/transform");

const getAuthFromKoaContext = getOr({}, "state.auth");

const customizeControllersFactory = ({ strapi }) => {
  const controllerUids = strapi.container
    .get("controllers")
    .keys()
    .filter((ctrl) => ctrl.startsWith("api::"));

  for (const controllerUid of controllerUids) {
    const contentType = strapi.contentType(controllerUid);

    const proto = {
      transformResponse(data, meta) {
        return transformResponse(data, meta, { contentType });
      },

      sanitizeOutput(data, ctx) {
        const auth = getAuthFromKoaContext(ctx);

        return sanitize.contentAPI.output(data, contentType, { auth });
      },

      sanitizeInput(data, ctx) {
        const auth = getAuthFromKoaContext(ctx);

        return sanitize.contentAPI.input(data, contentType, { auth });
      },

      sanitizeQuery(ctx) {
        const auth = getAuthFromKoaContext(ctx);

        return sanitize.contentAPI.query(ctx.query, contentType, { auth });
      },
    };

    strapi.container.get("controllers").get(controllerUid).__proto__.__proto__ =
      proto;
  }
};

const customizeCoreStrapi = ({ strapi }) => {
  customizeControllersFactory({ strapi });
};

module.exports = customizeCoreStrapi;
