import utils from "@rogwild/next-utils";
import {
  IAuthLayout,
  IDashboardLayout,
  IPageProps,
  IPublicPageLayout,
} from "types";
import HeaderSections from "~components/page-blocks/header-sections";
const { ApiClient } = utils.api;
import { BACKEND_URL } from "./envs";
import HeroSections from "~components/page-blocks/hero-sections";
import Reviews from "~components/page-blocks/reviews";
import FeatureSections from "~components/page-blocks/feature-sections";
import Faqs from "~components/page-blocks/faqs";
import LogoClouds from "~components/page-blocks/logo-clouds";
import Slider from "~components/page-blocks/slider";
import Forms from "~components/page-blocks/forms";
import NotFound from "~components/page-blocks/not-found";
import ContactSectons from "~components/page-blocks/contact-sections";
import Incentives from "~components/page-blocks/incentives";
import CtaSections from "~components/page-blocks/cta-sections";
import Pricings from "~components/page-blocks/pricings";
import ReviewsTables from "~components/page-blocks/reviews-tables";

const buttonPopulate = {
  icon: `*`,
};

const buttonArrayPopulate = {
  buttons: {
    populate: buttonPopulate,
  },
};

export const footerPopulate = {
  logo: `*`,
  social_networks_buttons: {
    populate: buttonArrayPopulate,
  },
  policies_buttons: {
    populate: buttonArrayPopulate,
  },
  buttons_arrays: {
    populate: buttonArrayPopulate,
  },
};

export const headerPopulate = {
  logo: `*`,
  buttons: {
    populate: {
      buttons: {
        populate: buttonPopulate,
      },
      icon: `*`,
      buttons_arrays: {
        populate: buttonArrayPopulate,
      },
    },
  },
  additional_buttons: {
    populate: buttonPopulate,
  },
  cta_buttons: {
    populate: buttonPopulate,
  },
  profile_buttons: {
    populate: buttonPopulate,
  },
};

export const pageBlocksQuery = {
  populate: {
    page_blocks: {
      populate: {
        buttons: { populate: `*` },
        background: { populate: `*` },
        buttons_arrays: {
          populate: buttonArrayPopulate,
        },
        media: { populate: `*` },
        tiers: {
          populate: {
            features: {
              populate: `*`,
            },
          },
        },
        features: { populate: `*` },
        faqs: { populate: `*` },
        logos: { populate: `*` },
        logo: { populate: `*` },
        slider: {
          populate: {
            slides: { populate: `*` },
          },
        },
        form: {
          populate: {
            inputs: {
              populate: {
                options: {
                  populate: `*`,
                },
              },
            },
            button: {
              populate: {
                icon: `*`,
              },
            },
          },
        },
      },
    },
    // Needs for product page, because strapi gives only 2 deep leves of components
    tabs: { populate: `*` },
  },
};

export const getNotFoundPage = async (locale: string) => {
  const additionalBlocks = await getAdditionalBlocks(locale);

  const pageData = (await utils.api.getPageData({
    url: BACKEND_URL,
    page: `not-found-page`,
    locale,
    query: pageBlocksQuery,
    additionalBlocks: [],
  })) as any;

  return {
    pageBlocks: pageData?.pageBlocks || [],
    ...additionalBlocks,
  } as IPageProps;
};

export const getMainPage = async (locale: string) => {
  const additionalBlocks = await getAdditionalBlocks(locale);

  const pageData = (await utils.api.getPageData({
    url: BACKEND_URL,
    page: `main-page`,
    locale,
    query: pageBlocksQuery,
    additionalBlocks: [],
  })) as any;

  return {
    pageBlocks: pageData?.pageBlocks || [],
    ...additionalBlocks,
  } as IPageProps;
};

async function getAdditionalBlocks(locale: string) {
  const backend = new ApiClient(BACKEND_URL);

  const publicPageLayout = (await backend.request({
    model: `public-page-layout`,
    query: {
      locale,
      populate: `*`,
    },
  })) as IPublicPageLayout;
  const meta = (await backend.request({
    model: `meta`,
    query: {
      populate: {
        favicon: `*`,
      },
    },
  })) as any;
  const header = (await backend.request({
    model: `header`,
    query: {
      locale,
      populate: headerPopulate,
    },
  })) as any;
  const footer = (await backend.request({
    model: `footer`,
    query: {
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

export const pageBlockComponents = {
  [`page-blocks.header-section-block`]: HeaderSections,
  [`page-blocks.hero-section-block`]: HeroSections,
  [`page-blocks.reviews-block`]: Reviews,
  [`page-blocks.feature-section-block`]: FeatureSections,
  [`page-blocks.faqs-block`]: Faqs,
  [`page-blocks.logo-cloud-block`]: LogoClouds,
  [`page-blocks.slider-block`]: Slider,
  [`page-blocks.form-block`]: Forms,
  [`page-blocks.not-found-block`]: NotFound,
  [`page-blocks.contact-section-block`]: ContactSectons,
  [`page-blocks.incentives-block`]: Incentives,
  [`page-blocks.cta-section-block`]: CtaSections,
  [`page-blocks.pricing-block`]: Pricings,
  [`page-blocks.reviews-table-block`]: ReviewsTables,
};
