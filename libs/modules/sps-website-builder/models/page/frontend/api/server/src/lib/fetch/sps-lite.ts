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

const fetchOptions = {
  next: {
    revalidate: 0,
    tag: route,
  },
};

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
    fetchOptions,
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

  const urlSegments = page.url?.split("/").filter((u: string) => u !== "");

  for (const [index, urlSegment] of urlSegments.entries()) {
    if (urlSegment.includes(".") && splittedParams && splittedParams[index]) {
      const sanitizedUrlSegment = urlSegment
        .replaceAll("[", "")
        .replaceAll("]", "");

      const filter = {
        [sanitizedUrlSegment]: splittedParams[index],
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
}): Promise<string | undefined> {
  const page = await getByUrl({ url, locale });

  const filters = getFiltersFromUrl({ page, params: { url, locale } });

  const targetFilter = filters.find(
    (filter) => filter[modelName] !== undefined,
  );

  const id = targetFilter[modelName];

  return id;
}

async function getPage(params: Params) {
  const { url, locale } = params;
  let targetPage = await getByUrl({ url, locale });

  if (!targetPage) {
    targetPage = await getByUrl({ url: "/404", locale });
  }

  if (!targetPage) {
    const pages = await api.find();

    if (pages.length) {
      return notFound();
    }

    return;
  }

  const request = await fetch(
    `${BACKEND_URL}/api/sps-website-builder/pages/${targetPage.id}`,
    fetchOptions,
  );

  const filledTargetPage = await request.json();
  const transformedData = transformResponseItem(filledTargetPage);

  return transformedData;
}

export const api = {
  findById: async ({ id }: { id: string }) => {
    return await utilsFetch.api.findById<IModelExtended>({
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
      fetchOptions,
    );

    if (!request.ok) {
      return {};
    }

    const metatagsJson = await request.json();
    const metatags = transformResponseItem(metatagsJson);

    if (!metatags?.length) {
      const defaultMetatagsRequest = await fetch(
        `${BACKEND_URL}/api/sps-website-builder/metatags`,
        fetchOptions,
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
    try {
      const request = await fetch(
        `${BACKEND_URL}/api/sps-website-builder/pages/get-urls`,
        fetchOptions,
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
    } catch (error) {
      return [];
    }
  },
};
