import { IPageProps, IPublicPageLayout } from "types";
import { BACKEND_URL } from "~utils/envs";
import { getBackendData } from ".";
import { footerPopulate, headerPopulate, pageBlocksQuery } from "./queries";

export async function getNotFoundPage(locale: string) {
  const page = new Page({ name: `not-found-page`, locale });

  const { pageData, additionalBlocks } = await page.getPage();

  return {
    ...pageData,
    ...additionalBlocks,
  } as IPageProps;
}

export async function getMainPage(locale: string) {
  const page = new Page({ name: `main-page`, locale });

  const { pageData, additionalBlocks } = await page.getPage();

  return {
    ...pageData,
    ...additionalBlocks,
  } as IPageProps;
}

export async function getAdditionalBlocks(locale: string) {
  const publicPageLayout = (await getBackendData({
    url: `${BACKEND_URL}/api/public-page-layout`,
    params: {
      locale,
      populate: `*`,
    },
  })) as IPublicPageLayout;

  const meta = (await getBackendData({
    url: `${BACKEND_URL}/api/meta`,
    params: {
      populate: {
        favicon: `*`,
      },
    },
  })) as any;

  const header = (await getBackendData({
    url: `${BACKEND_URL}/api/header`,
    params: {
      locale,
      populate: headerPopulate,
    },
  })) as any;

  const footer = (await getBackendData({
    url: `${BACKEND_URL}/api/footer`,
    params: {
      locale,
      populate: footerPopulate,
    },
  })) as any;

  return {
    meta: meta || {},
    header: header || {},
    footer: footer || {},
    publicPageLayout: publicPageLayout || {},
  };
}

export class Page {
  name: string;
  locale: string;

  constructor({ name, locale }: { name: string; locale: string }) {
    this.name = name;
    this.locale = locale;
  }

  async getPage() {
    const pageData = (await getBackendData({
      url: `${BACKEND_URL}/api/${this.name}`,
      params: pageBlocksQuery,
    })) as any;

    const additionalBlocks = await getAdditionalBlocks(this.locale);

    return { pageData, additionalBlocks };
  }
}
