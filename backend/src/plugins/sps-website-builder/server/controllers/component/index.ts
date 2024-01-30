/**
 * component controller
 */

import * as strapiUtils from "@strapi/utils";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "plugin::sps-website-builder.component",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const { component } = ctx.query;

      if (!component) {
        throw new strapiUtils.errors.ValidationError(
          "Missing 'component' payload in the request query",
        );
      }

      const strapiModel = strapi.components[component as unknown as string];

      if (!strapiModel) {
        throw new strapiUtils.errors.ValidationError(
          `Wrong component: '${component}' passed in the request query`,
        );
      }

      const query = strapiUtils.convertQueryParams.transformParamsToQuery(
        strapiModel.uid,
        ctx.query,
      );

      const componentData = strapi
        .query(strapiModel.uid)
        .findOne({ ...query, where: { id } });

      return componentData;
    },
  }),
);
