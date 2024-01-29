"use server";

import { notFound } from "next/navigation";
import {
  getFileUrl,
  BACKEND_URL,
  getBackendData,
  getTargetPage,
} from "@sps/utils";
import { populate as metatagpopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/metatag/populate";
import { populate as pagepopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/populate";
import { PageBlocks } from "../../../components/page-blocks";

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
        pages: {
          id: pageProps.id,
        },
      },
      locale: pageProps.locale,
      populate: metatagPopulate,
    },
  });

  if (!metatags?.length) {
    const defaultMetatags = await getBackendData({
      url: `${BACKEND_URL}/api/sps-website-builder/metatags`,
      params: {
        filters: {
          is_default: true,
        },
        locale: pageProps.locale,
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
}

export async function getPage(props: any) {
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

export async function Page(props: any) {
  const page = await getPage(props);

  return (
    <div>
      <PageBlocks pageProps={props} page={page} pageBlocks={page.pageBlocks} />
    </div>
  );
}
