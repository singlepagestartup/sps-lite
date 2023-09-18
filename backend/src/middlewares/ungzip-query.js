"use strict";

const pako = require("pako");

/**
 * @type {import('./').MiddlewareFactory}
 */
module.exports = (config, { strapi }) => {
  return async (context, next) => {
    if (context?.request?.headers?.["query-encoding"] === "application/gzip") {
      const compressedData = Buffer.from(context.request.querystring, "base64");
      const originalData = pako.ungzip(compressedData);
      const originalString = new TextDecoder().decode(originalData);

      context.request.querystring = originalString;
    }

    await next();
  };
};
