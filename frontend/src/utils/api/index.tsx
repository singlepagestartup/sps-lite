import { stringify } from "qs";
import { transformResponseItem } from "./transform-response-item";
import { BACKEND_URL } from "~utils/envs";

interface IFetchProps {
  url: string;
  params?: any;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

interface IHeaders {
  [key: string]: string;
}

export async function getBackendData(props: IFetchProps) {
  const { url, params, data, method = "GET" } = props;

  const query = stringify(params || {}, {
    encodeValuesOnly: true,
  });

  const headers: IHeaders = {};

  if (process.env.NEXT_PUBLIC_BACKEND_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`;
  }

  const backendData = await fetch(`${url}?${query}`, {
    method,
    body: data,
    next: { revalidate: 10 },
    headers,
  })
    .then(async (res) => {
      const jsonRes = await res.json();

      if (Array.isArray(jsonRes.data)) {
        const result: any = jsonRes.data.map((item: any) =>
          transformResponseItem(item),
        );
        result["_meta"] = jsonRes?.meta as any;

        return result;
      } else {
        return {
          ...transformResponseItem(jsonRes.data),
          _meta: jsonRes.meta,
        };
      }
    })
    .catch((error) => {
      console.error(`\n ${method} ${url}?${query} | ${error.message}`);
    });

  return backendData;
}

export async function getTargetPage({ url, locale }: any) {
  const localUrl =
    typeof url === "string" ? `/${url}` : `/${url?.join("/") || ""}`;

  const pages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale: "all", pagination: { limit: -1 } },
  });

  const filledPages = [];
  for (const page of pages) {
    if (page.url.includes(".")) {
      const modelRoutes = page.url
        .split("/")
        .filter((url: string) => url.includes("."));

      const pgs = await getPages({ modelRoutes, page });

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
      urls: [page.url],
    });
  }

  const targetPage = filledPages.find((page) => {
    if (page.urls.includes(localUrl) && page.locale === locale) {
      return true;
    }
  });

  return targetPage;
}

export async function getPages({ filters, modelRoutes, page }: any) {
  const localFilters = { ...filters };
  const filledPages = [];

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
  const model = sanitizedRoute.split(".")[0];
  const modelParam = sanitizedRoute.split(".")[1];

  const modelEntites = await getBackendData({
    url: `${BACKEND_URL}/api/${model}`,
    params: {
      fields: [modelParam],
      locale: page.locale,
      filters: localFilters,
      pagination: { limit: "-1" },
    },
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

        entitesUrls.push(`/${pathUrl.join("/")}`);
      } else {
        const sanitizedModelRoutes = modelRoutes.filter(
          (mr: string) => mr !== modelRoute,
        );

        const filters = {
          [model]: `${modelEntity.id}`,
        };

        const p = await getPages({
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

export function getFiltersFromPageUrl({ page, params }: any): any[] {
  const filters = [];

  const pageUrls = page.url.split("/").filter((u: string) => u !== "");

  for (const [index, pageUrl] of pageUrls.entries()) {
    if (pageUrl.includes(".") && params?.url && params.url[index]) {
      const key = pageUrl.replace("[", "").replace("]", "").split(".")[0];

      const filter = {
        [key]: {
          id: {
            $in: [params.url[index]],
          },
        },
      };

      filters.push(filter);
    }
  }

  return filters;
}

export async function getPaths({ filters, path, modelRoutes }: any) {
  const pagesPaths = [];
  const localFilters = { ...filters };

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
  const model = sanitizedRoute.split(".")[0];
  const modelParam = sanitizedRoute.split(".")[1];

  const modelEntites = await getBackendData({
    url: `${BACKEND_URL}/api/${model}`,
    params: {
      locale: "all",
      filters: localFilters,
      pagination: { limit: "-1" },
    },
  });

  if (modelEntites?.length) {
    for (const modelEntity of modelEntites) {
      const uri = `${modelEntity[modelParam]}`;
      const pathUrl = path.url.map((url: string) => {
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
      });

      const resPath = {
        url: pathUrl,
      } as any;

      if (modelEntity.locale) {
        resPath.locale = modelEntity.locale;
      }
      if (modelRoutes.length === 1) {
        pagesPaths.push(resPath);
      } else {
        const sanitizedModelRoutes = modelRoutes.filter(
          (mr: string) => mr !== modelRoute,
        );
        const filters = {
          [model]: `${modelEntity.id}`,
        };

        const p = await getPaths({
          filters,
          modelRoutes: sanitizedModelRoutes,
          path,
        });

        if (p.length) {
          p.forEach((pt) => {
            pagesPaths.push(pt);
          });
        }
      }
    }
  }

  return pagesPaths;
}
