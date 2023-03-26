import { IPageProps } from "types";
import { getBackendData } from "~utils/api";
import { BACKEND_URL } from "~utils/envs";
import {
  footerPopulate,
  headerPopulate,
  pageBlocksQuery,
} from "~utils/api/queries";

export default class Page {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async get() {
    const pageData = (await getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: { ...pageBlocksQuery, locale: this.locale },
    })) as any;

    const additionalBlocks = await getAdditionalBlocks(this.locale);

    return { ...pageData, ...additionalBlocks } as IPageProps;
  }
}

class AdditionalBlock {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async get({ populate }: { populate: any }) {
    return getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: {
        locale: this.locale,
        populate,
      },
    });
  }
}

export async function getAdditionalBlocks(locale: string) {
  const publicPageLayout = await new AdditionalBlock({
    name: `public-page-layout`,
    locale,
  }).get({ populate: `*` });

  const meta = await new AdditionalBlock({
    name: `meta`,
    locale,
  }).get({ populate: { favicon: `*` } });

  const header = await new AdditionalBlock({
    name: `header`,
    locale,
  }).get({ populate: headerPopulate });

  const footer = await new AdditionalBlock({
    name: `footer`,
    locale,
  }).get({ populate: footerPopulate });

  return {
    meta: meta || {},
    header: header || {},
    footer: footer || {},
    publicPageLayout: publicPageLayout || {},
  };
}
