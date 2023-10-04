/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async getByUrl(ctx) {
      let queryUrl = ctx.query.url;

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
        filters: { url: queryUrl },
      });

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

      const sanitizedResults = await this.sanitizeOutput(targetPage, ctx);

      return this.transformResponse(sanitizedResults, {});
    },

    async getUrls(ctx) {
      // const sanitizedQuery = await this.sanitizeQuery(ctx);
      const query = ctx.query;

      const filledPages = await getFilledPages(query);
      const urls = filledPages.map((page) => page.urls).flat();

      const sanitizedResults = await this.sanitizeOutput({ urls }, ctx);

      return this.transformResponse(sanitizedResults, {});
    },
  }),
);

async function getFilledPages({ locale, populate = "*", limit = -1, filters }) {
  const { results: pages, pagination } = await strapi
    .service("api::page.page")
    .find({ filters, locale, populate, pagination: { limit } });

  const filledPages = [];
  for (const page of pages) {
    if (page.url.includes(".")) {
      const modelRoutes = page.url
        .split("/")
        .filter((url: string) => url.includes("."));

      const pgs = await getModelPages({ modelRoutes, page });

      // console.log("🚀 ~ getPage ~ pgs:", pgs);

      if (pgs.length) {
        pgs.forEach((p) => {
          filledPages.push(p);
        });
      }

      continue;
    }

    filledPages.push({
      ...page,
      urls: [{ url: page.url, locale: page.locale }],
    });
  }

  return filledPages;
}

async function getModelPages({ filters, modelRoutes, page }: any) {
  const filledPages = [];

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
  const model = sanitizedRoute.split(".")[0];
  const modelParam = sanitizedRoute.split(".")[1];
  let strapiModel = model;
  if (model.includes("user")) {
    strapiModel = "plugin::users-permissions.user";
  } else {
    strapiModel = `api::${model}.${model}`;
  }

  const modelEntites = await strapi.entityService.findMany(strapiModel, {
    locale: page.locale,
    pagination: { limit: "-1" },
  });

  if (modelEntites?.length) {
    const entitesUrls = [];
    for (const modelEntity of modelEntites) {
      if (modelRoutes.length === 1) {
        const uri = `${modelEntity[modelParam]}`;
        const pathUrl = page.url
          .split("/")
          .map((url: string) => {
            if (url === modelRoute) {
              return uri;
            }

            if (url.includes(".") && filters && Object.keys(filters)) {
              const sanitizedRoute = url.replace("[", "").replace("]", "");
              const model = sanitizedRoute.split(".")[0];
              if (filters[model]) {
                return filters[model];
              }
            }

            return url;
          })
          .filter((url: string) => url !== "");

        entitesUrls.push({ url: `/${pathUrl.join("/")}`, locale: page.locale });
      } else {
        const sanitizedModelRoutes = modelRoutes.filter(
          (mr: string) => mr !== modelRoute,
        );

        const filters = {
          [model]: `${modelEntity.id}`,
        };

        const p = await getModelPages({
          filters,
          modelRoutes: sanitizedModelRoutes,
          page,
        });

        if (p.length) {
          p.forEach((pg) => {
            pg.urls.forEach((u: string) => {
              entitesUrls.push(u);
            });
          });
        }
      }
    }

    filledPages.push({
      ...page,
      urls: entitesUrls,
    });
  }

  return filledPages;
}
