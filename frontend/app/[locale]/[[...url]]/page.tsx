import { notFound } from "next/navigation";
import PageBlocks from "~components/page-blocks";
import { getBackendData, getTargetPage } from "~utils/api";
import { populate as metatagPopulate } from "~redux/services/backend/extensions/sps-website-builder/api/metatag/populate";
import { populate as pagePopulate } from "~redux/services/backend/extensions/sps-website-builder/api/page/populate";
import { BACKEND_URL } from "~utils/envs";
import getImageUrl from "~utils/api/get-file-url";

export const dynamicParams = true;

export async function generateStaticParams() {
  const pagesUrls = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages/get-urls`,
    params: { locale: "all", pagination: { limit: -1 } },
  });

  const paths =
    pagesUrls?.urls?.map((pageParams: { url: string; locale: string }) => {
      return {
        ...pageParams,
        url:
          pageParams.url === "/"
            ? []
            : pageParams.url.split("/").filter((p) => p !== ""),
      };
    }) || [];

  return paths;
}

export async function generateMetadata(props: any) {
  const pageProps = await getPage(props);
  const metatags = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/metatags`,
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
      url: `${BACKEND_URL}/api/sps-website-builder/metatags`,
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

  const filledTargetPage = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages/${targetPage.id}`,
    params: { locale, populate: pagePopulate },
  });

  if (!filledTargetPage) {
    return notFound();
  }

  return filledTargetPage;
}

export default async function Page(props: any) {
  const pageProps = await getPage(props);

  return <PageBlocks pageProps={props} pageBlocks={pageProps.pageBlocks} />;
}
