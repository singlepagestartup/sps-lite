import {
  ISpsLiteBackendContactSectonBlock,
  ISpsLiteBackendCtaSectionBlock,
  ISpsLiteBackendFaqBlock,
  ISpsLiteBackendFeaturesSectionBlock,
  ISpsLiteBackendHeaderSectionBlock,
  ISpsLiteBackendHeroSectionBlock,
  ISpsLiteBackendIncentivesBlock,
  ISpsLiteBackendLogotypesCloudBlock,
  ISpsLiteBackendNotFoundBlock,
  ISpsLiteBackendPricingsBlock,
  ISpsLiteBackendReviewsBlock,
  ISpsLiteBackendReviewsTableBlock,
  ISpsLiteBackendSliderBlock,
} from "types/components/page-blocks/sps-lite";
import {
  spsLiteBackendSliderFadeWithPreviews,
  spsLiteBackendTier,
} from "~mocks/collection-types/sps-lite";
import {
  spsLiteBackendButtonDefault,
  spsLiteBackendButtonsArraySimple,
  spsLiteBackendFaq,
  spsLiteBackendFeature,
  spsLiteBackendLogotype,
} from "~mocks/components/elements/sps-lite";
import { spsLiteUploadPluginBackendMediaTableAndHands } from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendFeatureSectionBlockWithProductScreenshot: ISpsLiteBackendFeaturesSectionBlock =
  {
    id: 32,
    title: `Hello world`,
    variant: `with-product-screenshot`,
    subtitle: null,
    anchor: null,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    __component: `page-blocks.features-section-block`,
    features: Array(4).fill(spsLiteBackendFeature),
    media: [spsLiteUploadPluginBackendMediaTableAndHands],
  };

export const spsLiteBackendContactSectionBlockCentered: ISpsLiteBackendContactSectonBlock =
  {
    id: 5,
    title: `Hello world`,
    variant: `centered`,
    __component: `page-blocks.contact-section-block`,
    anchor: null,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    buttonsArrays: [spsLiteBackendButtonsArraySimple],
  };

export const spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot: ISpsLiteBackendCtaSectionBlock =
  {
    id: 3,
    title: `Hello world`,
    variant: `dark-panel-with-app-screenshot`,
    __component: `page-blocks.cta-section-block`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    buttons: Array(3).fill(spsLiteBackendButtonDefault),
  };

export const spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction: ISpsLiteBackendFaqBlock =
  {
    id: 2,
    title: `Hello world`,
    anchor: null,
    variant: `two-columns-with-centered-introduction`,
    __component: `page-blocks.faqs-block`,
    description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
    faqs: Array(4).fill(spsLiteBackendFaq),
  };

export const spsLiteBackendHeaderSectionBlockSimpleCentered: ISpsLiteBackendHeaderSectionBlock =
  {
    id: 9,
    variant: `simple-centered`,
    __component: `page-blocks.header-section-block`,
    title: `Используемые коцепции`,
    subtitle: null,
    anchor: null,
    description: `Концепции, используемые в SPS позволяют постепенно дорабатывать проект при этом давая возможность пользователям получить ваш продукт сразу же. Не нужно разрабатывать проект месяцами, просто начните с одной страницы и добавляйте функционал по мере необходимости. А когда поймете что уперлись в потолок, доработайте функционал под ваши нужды, SPS не ограничивает вас ничем, вы просто пишите JS код на бекенде (Stapi) и фронтенде (Next.js + Tailwind CSS). Не нужно учить новый язык, шаблонизатор или пытаться добавить функционал в закрытую систему.`,
  };

export const spsLiteBackendHeroSectionBlockSimpleCentered: ISpsLiteBackendHeroSectionBlock =
  {
    id: 4,
    variant: `simple-centered`,
    anchor: null,
    title: `OpenSource "под капотом"`,
    description: `Используем OpenSource инструменты под капотом, это имеет ряд преимуществ, таких как быстрая фиксация багов в ядре, лучший уровень безопасности.`,
    buttons: [spsLiteBackendButtonDefault],
    __component: `page-blocks.hero-section-block`,
  };

export const spsLiteBackendIncentivesBlockFourColumnWithIllustrations: ISpsLiteBackendIncentivesBlock =
  {
    id: 9,
    title: null,
    description: null,
    anchor: null,
    __component: `page-blocks.incentives-block`,
    variant: `four-column-with-illustrations`,
    features: Array(4).fill(spsLiteBackendFeature),
  };

export const spsLiteBackendLogotypesCloudBlockSimpleWithHeading: ISpsLiteBackendLogotypesCloudBlock =
  {
    id: 5,
    __component: `page-blocks.logotypes-cloud-block`,
    title: `Hello world`,
    variant: `simple-with-heading`,
    description: null,
    anchor: null,
    logotypes: Array(5).fill(spsLiteBackendLogotype),
  };

export const spsLiteBackendNotFoundBlockSimple: ISpsLiteBackendNotFoundBlock = {
  id: 3,
  __component: `page-blocks.not-found-block`,
  variant: `simple`,
  title: `404`,
  subtitle: `Page not found`,
  description: `Come to main page and start again`,
  buttons: Array(1).fill(spsLiteBackendButtonDefault),
};

export const spsLiteBackendPricingBlockSinglePriceWithDetails: ISpsLiteBackendPricingsBlock =
  {
    id: 2,
    __component: `page-blocks.pricing-block`,
    variant: `single-price-with-details`,
    title: `Один шаг чтобы стать Lean Startup разработчиком`,
    subtitle: null,
    anchor: null,
    description: `Сэкономьте более 250 часов работы разработчика (7'500$) и постоянный доступ к обновлениям кодовой базы. Таким образом все разработанные на базе SPS проекты можно будет обновлять прямо из репозитория SPS. Не нужно копировать-вставлять блоки кода при обновлении.`,
    className: null,
    tiers: Array(2).fill(spsLiteBackendTier),
  };

export const spsLiteBackendReviewsBlockSimpleWithAvatars: ISpsLiteBackendReviewsBlock =
  {
    id: 5,
    __component: `page-blocks.reviews-block`,
    variant: `simple-with-avatars`,
    showAll: null,
    anchor: null,
  };

export const spsLiteBackendReviewsTableBlockSimple: ISpsLiteBackendReviewsTableBlock =
  {
    id: 9,
    __component: `page-blocks.reviews-table-block`,
    variant: `simple`,
    anchor: null,
  };

export const spsLiteBackendSliderBlockSimple: ISpsLiteBackendSliderBlock = {
  id: 2,
  __component: `page-blocks.slider-block`,
  variant: `simple`,
  slider: spsLiteBackendSliderFadeWithPreviews,
  anchor: null,
};
