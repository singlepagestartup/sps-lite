import { IBackendPage } from "types/collection-types";
import Layouts from "~components/layouts";
import { getBackendData } from "~utils/api";
import { pagePopulate } from "~utils/api/queries";
import { BACKEND_URL } from "~utils/envs";

export default function Page(props: IBackendPage) {
  // return <Layouts {...props} />;
}

export async function getStaticPaths() {
  const pages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale: "all" },
  });

  let paths =
    pages?.map((page: IBackendPage) => {
      const routeElements = page.url
        .split("/")
        .filter((element) => element !== "");

      const path = {
        params: { url: routeElements },
        locale: page.locale,
      };

      return path;
    }) || [];

  const filledPaths = [];

  for (const path of paths) {
    if (path.params.url?.find((url: string) => url.includes("."))) {
      const modelRoute = path.params.url.find((url: string) =>
        url.includes(".")
      );

      const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
      const model = sanitizedRoute.split(".")[0];
      const modelParam = sanitizedRoute.split(".")[1];

      const modelEntites = await getBackendData({
        url: `${BACKEND_URL}/api/${model}`,
        params: {
          locale: "all",
          pagination: { limit: "-1" },
        },
      });

      if (modelEntites?.length) {
        for (const modelEntity of modelEntites) {
          const uri = `${modelEntity[modelParam]}`;
          const pathUrl = path.params.url.map((url: string) => {
            if (url === modelRoute) {
              return uri;
            }
            return url;
          });

          const resPath = {
            ...path,
            params: {
              ...path.params,
              url: pathUrl,
            },
          };

          if (modelEntity.locale) {
            resPath.locale = modelEntity.locale;
          }

          filledPaths.push(resPath);
        }
      }
      continue;
    }

    /**
     * Specific for "next export", should be added as a file
     */
    if (path.params.url[0] === "404" || path.params.url[0] === "500") {
      continue;
    }

    filledPaths.push(path);
  }

  return {
    paths: filledPaths,
    fallback: false,
  };
}

export const getStaticProps = async (params: any) => {
  const pageUrl = `/${params.params?.url?.join("/") || ""}`;
  const { locale }: { locale: string } = params;

  const pages = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale: "all" },
  });

  const filledPages = [];
  for (const page of pages) {
    if (page.url.includes(".")) {
      const modelRoute = page.url
        .split("/")
        .find((url: string) => url.includes("."));
      const sanitizedRoute = modelRoute.replace("[", "").replace("]", "");
      const model = sanitizedRoute.split(".")[0];
      const modelParam = sanitizedRoute.split(".")[1];

      const modelEntites = await getBackendData({
        url: `${BACKEND_URL}/api/${model}`,
        params: {
          locale: page.locale,
          fields: [modelParam],
          pagination: { limit: "-1" },
        },
      });

      if (modelEntites?.length) {
        const entitesUrls = [];
        for (const modelEntity of modelEntites) {
          const uri = `${modelEntity[modelParam]}`;
          const pathUrl = page.url
            .split("/")
            .map((url: string) => {
              if (url === modelRoute) {
                return uri;
              }

              return url;
            })
            .filter((url: string) => url !== "");

          entitesUrls.push(`/${pathUrl.join("/")}`);
        }

        filledPages.push({
          ...page,
          urls: entitesUrls,
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
    return {
      props: {},
      revalidate: 600,
    };
  }

  const filters = {
    id: targetPage.id,
  };

  const page = await getBackendData({
    url: `${BACKEND_URL}/api/pages`,
    params: { locale, populate: pagePopulate, filters },
  });

  if (!page?.length) {
    return {
      props: {},
      revalidate: 600,
    };
  }

  return {
    props: {
      ...page[0],
    },
    revalidate: 600,
  };
};
