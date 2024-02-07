import {
  BACKEND_URL,
  fetch,
  getBackendData,
  getFileUrl,
  getTargetPage,
} from "@sps/utils";
import { populate, route, IModelExtended } from "../../model";
import { notFound } from "next/navigation";
import { populate as metatagPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/metatag/populate";

async function getPage(props: any) {
  const { locale }: { locale: string } = props.params;

  const targetPage = await getTargetPage(props.params);

  if (!targetPage) {
    return notFound();
  }

  const filledTargetPage = await getBackendData({
    url: `${BACKEND_URL}/api/sps-website-builder/pages/${targetPage.id}`,
    params: { locale, populate },
  });

  if (!filledTargetPage) {
    return notFound();
  }

  return filledTargetPage;
}

export const api = {
  findOne: async ({ id }: { id: number }) => {
    return await fetch.api.findOne<IModelExtended>({
      id,
      model: route,
      populate,
    });
  },
  find: async () => {
    return await fetch.api.find<IModelExtended>({ model: route, populate });
  },
  getPage,
  generateMetadata: async (props: any) => {
    const pageProps = await api.getPage(props);
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
  },
  getUrls: async () => {
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
  },
};
