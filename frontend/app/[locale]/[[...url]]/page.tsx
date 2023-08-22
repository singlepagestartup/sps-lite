import { notFound } from "next/navigation";
import { IBackendPage } from "types/collection-types";
import PageBlocks from "~components/page-blocks";
import { getBackendData } from "~utils/api";
import { metatagPopulate, pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";
import getImageUrl from "~utils/api/get-file-url";

export const dynamicParams = true;

export async function generateStaticParams() {
  const pages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale: "all", pagination: { limit: -1 } },
  });

  const paths =
    pages?.map((page: IBackendPage) => {
      const routeElements = page.url
        .split("/")
        .filter((element) => element !== "");

      const path = {
        url: routeElements,
        locale: page.locale,
      };

      return path;
    }) || [];

  const filledPaths = [];

  for (const path of paths) {
    if (path.url?.find((url: string) => url.includes("."))) {
      const modelRoutes = path.url.filter((url: string) => url.includes("."));
      const paths = await getPaths({ modelRoutes, path });

      paths.forEach((p) => {
        filledPaths.push(p);
      });

      continue;
    }

    /**
     * Specific for "next export", should be added as a file
     */
    if (path.url[0] === "404" || path.url[0] === "500") {
      continue;
    }

    filledPaths.push(path);
  }

  return filledPaths;
}

export async function generateMetadata(props: any) {
  const pageProps = await getPage(props);
  const metatags = await getBackendData({
    url: `${BACKEND_URL}/api/metatags`,
    params: {
      filters: {
        locale: pageProps.locale,
        pages: {
          id: pageProps.id,
        },
      },
      populate: metatagPopulate,
    },
  });

  if (!metatags?.length) {
    const defaultMetatags = await getBackendData({
      url: `${BACKEND_URL}/api/metatags`,
      params: {
        filters: {
          locale: pageProps.locale,
          is_default: true,
        },
        populate: metatagPopulate,
      },
    });

    if (!defaultMetatags.length) {
      return {
        title: "Single Page Startup",
        description: "The fastest way to create startup",
        icons: {
          icon: "/images/favicon.svg",
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
        icon: getImageUrl(defaultMetatag.favicon),
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
      icon: getImageUrl(metatag.favicon),
    };
  }

  return metadata;
}

async function getPage(props: any) {
  const pageUrl = `/${props.params?.url?.join("/") || ""}`;
  const { locale }: { locale: string } = props.params;

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
    if (page.urls.includes(pageUrl) && page.locale === locale) {
      return true;
    }
  });

  if (!targetPage) {
    return notFound();
  }

  const filters = {
    id: targetPage.id,
  };

  const filledTargetPages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale, populate: pagePopulate, filters },
  });

  if (!filledTargetPages.length) {
    return notFound();
  }

  return filledTargetPages[0];
}

export default async function Page(props: any) {
  const pageProps = await getPage(props);

  return <PageBlocks pageBlocks={pageProps.pageBlocks} />;
}

async function getPages({ filters, modelRoutes, page }: any) {
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

async function getPaths({ filters, path, modelRoutes }: any) {
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
