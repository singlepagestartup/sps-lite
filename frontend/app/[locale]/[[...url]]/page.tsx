import { notFound } from "next/navigation";
import { IBackendPage } from "types/collection-types";
import PageBlocks from "~components/page-blocks";
import { getBackendData, getPaths, getTargetPage } from "~utils/api";
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
  const { locale }: { locale: string } = props.params;

  const targetPage = await getTargetPage(props.params);

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
  console.log("🚀 ~ Page ~ props:", props);
  const pageProps = await getPage(props);

  return <PageBlocks pageBlocks={pageProps.pageBlocks} />;
}
