import { Hono } from "hono";
import { model } from "./model";
import { apiFactories } from "@sps/shared-backend-api";

export const app = new Hono();

/**
 * Only one level of nesting is supported
 * /route/[sps-website-builder.slide.id]
 *
 * Multiple levels of nesting are not supported, for now
 * /route/[sps-website-builder.category.id]/[sps-website-builder.slide.id]
 */
app.get("/get-urls", async (c) => {
  return c.json({
    ok: true,
  });
  // const filledPages = await getFilledPages();
  // const urls = filledPages.map((page) => page.urls).flat();

  // return c.json({
  //   data: { urls },
  // });
});

// app.get("/get-by-url", async (c) => {
//   const query = c.req.query("url");
//   console.log(`🚀 ~ app.get ~ query:`, query);

//   if (query === "favicon.ico") {
//     return c.json({
//       ok: true,
//     });
//   }

//   const filledPages = await getFilledPages();

//   const targetPage = filledPages.find((page) => {
//     const cuttedLastSlash = query !== "/" ? query?.replace(/\/$/, "") : query;

//     if (
//       page.urls.find((urlParam) => {
//         if (urlParam.url === cuttedLastSlash) {
//           return true;
//         }
//       })
//     ) {
//       return true;
//     }
//   });

//   return c.json({
//     data: targetPage,
//   });
// });

apiFactories.crudApiFactory({
  app,
  model,
});

// export async function getFilledPages() {
//   const pages = await db.query.PageTable.findMany();

//   const filledPages: {
//     urls: {
//       url: string;
//     }[];
//     id: string;
//   }[] = [];

//   for (const page of pages) {
//     if (page.url.includes(".")) {
//       const modelRoutes = page.url
//         .split("/")
//         .filter((url: string) => url.includes("."));

//       const modelBasedUrls = await getModelPages({ modelRoutes, page });

//       filledPages.push({
//         ...page,
//         urls: modelBasedUrls,
//       });

//       continue;
//     }

//     filledPages.push({
//       ...page,
//       urls: [{ url: page.url }],
//     });
//   }

//   return filledPages;
// }

// async function getModelPages({
//   modelRoutes,
//   page,
// }: {
//   modelRoutes: string[];
//   page: {
//     url: string;
//   };
// }) {
//   const filledPages: any = [];

//   const modelRoute = modelRoutes[0];
//   const sanitizedRoute = modelRoute
//     .replace("[", "")
//     .replace("]", "")
//     .split(".");

//   if (sanitizedRoute.length < 3) {
//     throw new Error(
//       "Invalid model param, should be 3 parts separated by dots. Eg: [sps-website-builder.slide.id]",
//     );
//   }

//   const module = sanitizedRoute[0];
//   const model = sanitizedRoute[1];
//   const param = sanitizedRoute[2];

//   const modelTable: any = appModels[model as keyof typeof appModels]?.modelName;

//   if (!modelTable) {
//     return filledPages;
//   }

//   // @ts-ignore
//   const entities = await db.query[modelTable as any]?.findMany({
//     columns: { [param]: true },
//   });

//   entities.forEach((entity: any) => {
//     const uri = `${entity[param]}`;
//     const pathUrl = page.url
//       .split("/")
//       .map((url: string) => {
//         if (url === modelRoute) {
//           return uri;
//         }

//         return url;
//       })
//       .filter((url: string) => url !== "");

//     filledPages.push({
//       url: `/${pathUrl.join("/")}`,
//       id: entity.id,
//     });
//   });

//   return filledPages;
// }
