import { fetch as utilsFetch } from "@sps/shared-frontend-utils-server";
import { populate, route, IModelExtended } from "../model";
import { notFound } from "next/navigation";
import {
  BACKEND_URL,
  getFileUrl,
  transformResponseItem,
} from "@sps/shared-utils";
const R = require("ramda");

export interface Params {
  url?: string | string[];
  locale: string | string[];
}

async function getByUrl({ url, locale }: Params) {
  const localUrl =
    typeof url === "string"
      ? url.startsWith("/")
        ? url
        : `/${url}`
      : `/${url?.join("/") || ""}`;

  if (!localUrl) {
    return;
  }

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/get-by-url?` +
      new URLSearchParams({
        url: localUrl,
      }),
  );

  const targetPage = await request.json();
  const transformedData = transformResponseItem(targetPage);

  if (!transformedData?.id) {
    return;
  }

  return transformedData;
}

function getFiltersFromUrl({
  page,
  params,
}: {
  page: {
    id: number;
    url: string;
  };
  params: Params;
}): any[] {
  const splittedParams = Array.isArray(params.url)
    ? params.url
    : params.url?.split("/").filter((u: string) => u !== "");

  if (!page.id) {
    return [];
  }

  const filters: any[] = [];

  const pageUrls = page.url?.split("/").filter((u: string) => u !== "");

  for (const [index, pageUrl] of pageUrls.entries()) {
    if (pageUrl.includes(".") && splittedParams && splittedParams[index]) {
      const sanitizedPageUrl = pageUrl.replace("[", "").replace("]", "");
      const key =
        sanitizedPageUrl.split(".")[sanitizedPageUrl.split(".").length - 2];

      const filter = {
        [key]: {
          id: {
            $in: [splittedParams[index]],
          },
        },
      };

      filters.push(filter);
    }
  }

  return filters;
}

async function getUrlModelId({
  url,
  modelName,
  locale,
}: {
  url: Params["url"];
  modelName: string;
  locale: Params["locale"];
}): Promise<number | undefined> {
  const page = await getByUrl({ url, locale });

  const filters = getFiltersFromUrl({ page, params: { url, locale } });

  let id;

  const targetFilter = filters.find(
    (filter) => filter[modelName] !== undefined,
  );

  if (R.path([modelName, "id", "$in", 0], targetFilter)) {
    id = targetFilter[modelName].id["$in"][0];
  }

  return id;
}

async function getPage({ url, locale }: Params) {
  const targetPage = await getByUrl({ url, locale });

  if (!targetPage) {
    return notFound();
  }

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/${targetPage.id}`,
  );

  const filledTargetPage = await request.json();
  const transformedData = transformResponseItem(filledTargetPage);

  if (!transformedData) {
    return notFound();
  }

  return transformedData;
}

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await utilsFetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async () => {
    return await utilsFetch.api.find<IModelExtended>({
      model: route,
      populate,
    });
  },
  getFiltersFromUrl,
  getByUrl,
  getPage,
  getUrlModelId,
  generateMetadata: async (props: any) => {
    const pageProps = await api.getPage(props);
    const request = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/metatags`,
    );

    if (!request.ok) {
      return {};
    }

    const metatagsJson = await request.json();
    const metatags = transformResponseItem(metatagsJson);

    if (!metatags?.length) {
      const defaultMetatagsRequest = await fetch(
        `${BACKEND_URL}/api/sps-website-builder/metatags`,
      );

      const defaultMetatagsJson = await defaultMetatagsRequest.json();
      const defaultMetatags = transformResponseItem(defaultMetatagsJson);

      if (!defaultMetatags?.length) {
        return {
          title: "Single Page Startup",
          description: "The fastest way to create startup",
          icons: {
            icon: "/assets/images/favicon.svg",
          },
        };
      }

      const defaultMetatag = defaultMetatags[0];

      const defaultMetadata = {
        title: defaultMetatag.title,
        description: defaultMetatag.description,
      } as any;

      if (defaultMetatag.favicon?.url) {
        defaultMetadata.icons = {
          icon: getFileUrl(defaultMetatag.favicon),
        };
      }

      return defaultMetadata;
    }

    const metatag = metatags[0];

    const metadata = {
      title: metatag.title,
      description: metatag.description,
    } as any;

    if (metatag.favicon?.url) {
      metadata.icons = {
        icon: getFileUrl(metatag.favicon),
      };
    }

    return metadata;
  },
  getUrls: async () => {
    const request = await fetch(
      `${BACKEND_URL}/api/sps-website-builder/pages/get-urls`,
    );

    const pagesUrls = await request.json();
    const transformedData = transformResponseItem(pagesUrls);

    const paths =
      transformedData?.urls?.map(
        (pageParams: { url: string; locale: string }) => {
          return {
            ...pageParams,
            url:
              pageParams.url === "/"
                ? []
                : pageParams.url.split("/").filter((p) => p !== ""),
          };
        },
      ) || [];

    return paths;
  },
};
