/**
 * layout controller
 */

import { factories } from "@strapi/strapi";
import { getFilledPages } from "../../page/controllers/page";

export default factories.createCoreController(
  "api::layout.layout",
  ({ strapi }) => ({
    async findByPageUrl(ctx) {
      let queryUrl = ctx.query.url;

      console.log("🚀 ~ findByPageUrl ~ queryUrl:", queryUrl);

      if (typeof queryUrl === "string") {
        queryUrl = queryUrl;
      } else if (Array.isArray(queryUrl)) {
        queryUrl = `/${queryUrl.join("/") || ""}`;
      } else {
        throw new Error("Wrong query type");
      }

      const sanitizedQuery = await this.sanitizeQuery(ctx);
      const filledPages = await getFilledPages({
        ...sanitizedQuery,
        filters: { locale: sanitizedQuery.locale },
      });

      console.log("🚀 ~ findByPageUrl ~ filledPages:", filledPages);

      const targetPage = filledPages.find((page) => {
        const cuttedLastSlash =
          queryUrl !== "/" ? queryUrl.replace(/\/$/, "") : queryUrl;

        if (
          page.urls.find((urlParam) => {
            if (urlParam.url === cuttedLastSlash) {
              return true;
            }
          })
        ) {
          return true;
        }
      });

      if (!targetPage) {
        throw new Error("Layout not found");
      }

      const populatedPage = await strapi.entityService.findOne(
        "api::page.page",
        targetPage.id,
        {
          populate: {
            layout: "*",
          },
        },
      );

      const layout = await strapi
        .service("api::layout.layout")
        .findOne(populatedPage.layout.id, sanitizedQuery);

      const sanitizedResults = await this.sanitizeOutput(layout, ctx);

      return this.transformResponse(sanitizedResults, {});
    },
  }),
);
