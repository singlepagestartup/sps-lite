import { stringify } from "qs";
import { transformResponseItem } from "./transform-response-item";
import { BACKEND_URL } from "~utils/envs";
import { plural } from "pluralize";
import { gzip } from "pako";

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

  const compressedQuery = gzip(query);
  const base64CompressedQuery = Buffer.from(compressedQuery).toString("base64");

  const headers: IHeaders = {
    "Query-Encoding": "application/gzip",
  };

  if (process.env.NEXT_PUBLIC_BACKEND_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`;
  }

  const backendData = await fetch(`${url}?${base64CompressedQuery}`, {
    method,
    body: data,
    // next: { revalidate: 10 },
    cache: "no-cache",
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

  if (!localUrl) {
    return;
  }

  const targetPage = await getBackendData({
    url: `${BACKEND_URL}/api/pages/get-by-url`,
    params: {
      url: localUrl,
      locale,
      pagination: { limit: -1 },
    },
  });

  if (!targetPage.id) {
    return;
  }

  return targetPage;
}

export async function getPages({ filters, modelRoutes, page }: any) {
  const localFilters = { ...filters };
  const filledPages = [];

  const modelRoute = modelRoutes[0];
  const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
  const model = sanitizedRoute.split(".")[0];
  const modelParam = sanitizedRoute.split(".")[1];
  const pluralModel = plural(model);

  const modelEntites = await getBackendData({
    url: `${BACKEND_URL}/api/${pluralModel}`,
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
  if (!page.id) {
    return [];
  }

  const filters = [];

  const pageUrls = page.url?.split("/").filter((u: string) => u !== "");

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
