import { Hono } from "hono";
import { model } from "@sps/sps-website-builder-models-page-backend-model";
import { apiFactories } from "@sps/shared-backend-api";
import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import { models as spsWebsiteBuilderModels } from "@sps/sps-website-builder-backend-models";

const db = drizzle(postgres, { schema });

export const app = new Hono();

/**
 * Only one level of nesting is supported
 * /route/[sps-website-builder.slide.id]
 *
 * Multiple levels of nesting are not supported, for now
 * /route/[sps-website-builder.category.id]/[sps-website-builder.slide.id]
 */
app.get("/get-urls", async (c) => {
  const filledPages = await getFilledPages();
  const urls = filledPages.map((page) => page.urls).flat();

  return c.json({
    data: { urls },
  });
});

app.get("/get-by-url", async (c) => {
  const query = c.req.query("url");

  if (query === "favicon.ico") {
    return c.json({
      ok: true,
    });
  }

  const filledPages = await getFilledPages();

  const targetPage = filledPages.find((page) => {
    const cuttedLastSlash = query !== "/" ? query?.replace(/\/$/, "") : query;

    if (
      page.urls.find((urlParam) => {
        if (urlParam.url === cuttedLastSlash) {
          return true;
        }

        return false;
      })
    ) {
      return true;
    }

    return false;
  });

  return c.json({
    data: targetPage,
  });
});

apiFactories.crudApiFactory({
  app,
  model,
});

export async function getFilledPages() {
  const pages = await db.query.PageTable.findMany();

  const filledPages: {
    urls: {
      url: string;
    }[];
    id: string;
  }[] = [];

  for (const page of pages) {
    if (
      page.url.includes(".") &&
      page.url.includes("[") &&
      page.url.includes("]")
    ) {
      const modelRoutes = page.url
        .split("/")
        .filter((url: string) => url.includes("."));

      const modelBasedUrls = await getModelPages({ modelRoutes, page });

      filledPages.push({
        ...page,
        urls: modelBasedUrls,
      });

      continue;
    }

    filledPages.push({
      ...page,
      urls: [{ url: page.url }],
    });
  }

  return filledPages;
}

async function getModelPages({
  modelRoutes,
  page,
}: {
  modelRoutes: string[];
  page: {
    url: string;
  };
}) {
  const filledPages: any = [];

  console.log(`🚀 ~ modelRoutes:`, modelRoutes);

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute
    .replace("[", "")
    .replace("]", "")
    .split(".");

  console.log(`🚀 ~ sanitizedRoute:`, sanitizedRoute);

  if (sanitizedRoute.length < 3) {
    throw new Error(
      "Invalid model param, should be 3 parts separated by dots. Eg: [sps-website-builder.slide.id]",
    );
  }

  const module = sanitizedRoute[0];
  const modelName = sanitizedRoute[1];
  const param = sanitizedRoute[2];

  const model =
    spsWebsiteBuilderModels[modelName as keyof typeof spsWebsiteBuilderModels];

  if (!model.find) {
    return filledPages;
  }

  // @ts-ignore
  const entities = await model.find();

  entities.forEach((entity: any) => {
    const uri = `${entity[param]}`;
    const pathUrl = page.url
      .split("/")
      .map((url: string) => {
        if (url === modelRoute) {
          return uri;
        }

        return url;
      })
      .filter((url: string) => url !== "");

    filledPages.push({
      url: `/${pathUrl.join("/")}`,
      id: entity.id,
    });
  });

  return filledPages;
}
