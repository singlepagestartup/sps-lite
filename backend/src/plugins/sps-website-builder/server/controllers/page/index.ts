/**
 * invoice controller
 */

import { factories } from "@strapi/strapi";
const { ValidationError } = require("@strapi/utils").errors;

export default factories.createCoreController(
  "plugin::sps-website-builder.page",
  ({ strapi }) => ({
    async getByUrl(ctx) {
      let queryUrl = ctx.query.url;

      if (typeof queryUrl === "string") {
        queryUrl = queryUrl;
      } else if (Array.isArray(queryUrl)) {
        queryUrl = `/${queryUrl.join("/") || ""}`;
      } else {
        throw new ValidationError("Wrong query 'url' passed");
      }

      const sanitizedQuery = await this.sanitizeQuery(ctx);

      const defaultLocale = await strapi
        .service("plugin::i18n.locales")
        .getDefaultLocale();

      const filledPages = await getFilledPages({
        ...sanitizedQuery,
        filters: { locale: sanitizedQuery.locale || defaultLocale },
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
      const sanitizedQuery = await this.sanitizeQuery(ctx);

      const filledPages = await getFilledPages(sanitizedQuery);
      const urls = filledPages.map((page) => page.urls).flat();

      const sanitizedResults = await this.sanitizeOutput({ urls }, ctx);

      return this.transformResponse(sanitizedResults, {});
    },
  }),
);

export async function getFilledPages(query: any) {
  const { results: pages } = await strapi
    .service("plugin::sps-website-builder.page")
    .find(query);
  // console.log("🚀 ~ getFilledPages ~ pages:", pages);

  const filledPages: any = [];
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

async function getModelPages({
  filters,
  modelRoutes,
  page,
}: {
  filters?: any;
  modelRoutes?: any;
  page: {
    locale: string;
    url: string;
  };
}) {
  const filledPages: any = [];

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
  const modelParam =
    sanitizedRoute.split(".")[sanitizedRoute.split(".").length - 1];
  let strapiModel = sanitizedRoute;

  if (sanitizedRoute.includes("::")) {
    const modelReplacedParam = sanitizedRoute
      .split(".")
      .slice(0, sanitizedRoute.split(".").length - 1)
      .join(".");

    strapiModel = modelReplacedParam;
  } else {
    strapiModel = `api::${sanitizedRoute}.${sanitizedRoute}`;
  }

  const findProps = {
    pagination: { limit: "-1" },
  };

  const modelHasLocalization =
    // @ts-ignore
    strapi.api[strapiModel]?.contentTypes[strapiModel]?.pluginOptions?.i18n
      ?.localized;

  if (modelHasLocalization) {
    findProps["locale"] = page.locale;
  }

  const { results: modelEntites } = await strapi
    .service(strapiModel)
    .find(findProps);

  if (modelEntites?.length) {
    const entitesUrls: any = [];
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
          ["model"]: `${modelEntity.id}`,
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
