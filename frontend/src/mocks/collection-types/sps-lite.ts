import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendForm,
  ISpsLiteBackendLayout,
  ISpsLiteBackendMetatag,
  ISpsLiteBackendModal,
  ISpsLiteBackendNavbar,
  ISpsLiteBackendPage,
  ISpsLiteBackendReview,
  ISpsLiteBackendSidebar,
  ISpsLiteBackendSlideOver,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
  ISpsLiteBackendTopbar,
} from "types/collection-types/sps-lite";
import {
  spsLiteBackendButtonSecondary,
  spsLiteBackendButtonPrimary,
  spsLiteBackendEmailInput,
  spsLiteBackendFeature,
  spsLiteBackendNameInput,
  spsLiteBackendPolicyInput,
  spsLiteBackendQuestionInput,
  spsLiteBackendSlide,
  spsLiteBackendTierInput,
} from "~mocks/components/elements/sps-lite";
import {
  spsLiteBackendFooterBlockSimple,
  spsLiteBackendHeroSectionBlockSimpleCentered,
  spsLiteBackendIncentivesBlockFourColumnWithIllustrations,
  spsLiteBackendNavbarBlockSimple,
} from "~mocks/components/page-blocks/sps-lite";
import {
  spsLiteUploadPluginBackendMediaRoundIcon,
  spsLiteUploadPluginBackendMediaTableAndHands,
} from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendSliderFadeWithPreviews: ISpsLiteBackendSlider = {
  id: 6,
  slides: Array(4).fill(spsLiteBackendSlide),
  variant: `fade-with-previews`,
  aspectRatioClassName: `aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10`,
  showBackdrop: true,
  showFullScreen: true,
  showPreviews: true,
  className: null,
  createdAt: `2023-02-14T08:49:14.623Z`,
  updatedAt: `2023-02-14T08:49:53.551Z`,
  publishedAt: `2023-02-14T22:48:50.378Z`,
};

export const spsLiteBackendCurrency: ISpsLiteBackendCurrency = {
  id: 7,
  title: `USD`,
  unicode: `$`,
  isDefault: true,
  createdAt: `2023-02-14T08:49:14.623Z`,
  updatedAt: `2023-02-14T08:49:53.551Z`,
  publishedAt: `2023-02-14T22:48:50.378Z`,
};

export const spsLiteBackendTier: ISpsLiteBackendTier = {
  id: 1,
  title: `Lite`,
  description: `Если хочешь попробовать концепцию в деле`,
  price: null,
  type: `one-time`,
  period: null,
  oldPrice: null,
  createdAt: `2023-02-14T08:49:14.623Z`,
  updatedAt: `2023-02-14T08:49:53.551Z`,
  publishedAt: `2023-02-14T22:48:50.378Z`,
  features: Array(4).fill(spsLiteBackendFeature),
  currency: { ...spsLiteBackendCurrency },
  buttons: [{ ...spsLiteBackendButtonSecondary }],
};

export const spsLiteBackendForm: ISpsLiteBackendForm = {
  id: 1,
  variant: `simple`,
  title: `Есть вопросы по продукту?`,
  subtitle: null,
  description: `Заполните форму и мы свяжемся с вами в ближайшее время`,
  uid: `question`,
  createdAt: `2023-02-14T10:12:40.873Z`,
  updatedAt: `2023-03-26T20:40:29.554Z`,
  publishedAt: `2023-02-14T22:44:48.245Z`,
  inputs: [
    { ...spsLiteBackendNameInput },
    { ...spsLiteBackendEmailInput },
    { ...spsLiteBackendTierInput },
    { ...spsLiteBackendQuestionInput },
    { ...spsLiteBackendPolicyInput },
  ],
  button: { ...spsLiteBackendButtonSecondary },
  className: null,
  additionalAttributes: null,
};

export const spsLiteBackendReview: ISpsLiteBackendReview = {
  id: 5,
  name: `Emily Wilson`,
  title: `Exceptional Startup with Great Potential`,
  description: `I had the pleasure of working with this startup and I was very impressed with their innovation and dedication to their customers. Their team is very knowledgeable and professional and I am confident that they have great potential for future success. I am looking forward to seeing what new innovations they come up with next. I highly recommend this startup to anyone looking for innovative solutions.`,
  subtitle: `Looking Forward to Future Innovations`,
  rating: 5,
  media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  additionalMedia: null,
  createdAt: `2023-02-14T08:49:14.623Z`,
  updatedAt: `2023-02-14T08:49:53.551Z`,
  publishedAt: `2023-02-14T22:48:50.378Z`,
};

export const spsLiteBackendModal: ISpsLiteBackendModal = {
  id: 1,
  title: `Hello world`,
  uid: `hello-world`,
  dialogPanelClassName: `container`,
  variant: `simple`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [{ ...spsLiteBackendHeroSectionBlockSimpleCentered }],
};

export const spsLiteBackendSlideOverSimpleRight: ISpsLiteBackendSlideOver = {
  id: 1,
  title: `Hello world`,
  locale: `en`,
  className: null,
  position: `right`,
  uid: `hero-section`,
  variant: `simple`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [
    { ...spsLiteBackendHeroSectionBlockSimpleCentered },
    { ...spsLiteBackendIncentivesBlockFourColumnWithIllustrations },
  ],
};

export const spsLiteBackendSidebarSimple: ISpsLiteBackendSidebar = {
  id: 1,
  title: `Ads sidebar`,
  locale: `en`,
  className: null,
  uid: `ads-sidebar`,
  variant: `simple`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [
    { ...spsLiteBackendButtonPrimary },
    { ...spsLiteBackendButtonPrimary },
    { ...spsLiteBackendButtonPrimary },
  ],
};

export const spsLiteBackendMetatg: ISpsLiteBackendMetatag = {
  id: 1,
  title: `Single Page Startup`,
  uid: `single-page-startup`,
  locale: `en`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  description: `Boilerplate for lean startup developers`,
  script: null,
  favicon: spsLiteUploadPluginBackendMediaRoundIcon,
};

export const spsLiteBackendTopbarSimple: ISpsLiteBackendTopbar = {
  id: 1,
  title: `Public Page Topbar`,
  uid: `public-page-topbar`,
  locale: `en`,
  variant: `simple`,
  className: null,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [{ ...spsLiteBackendButtonPrimary }],
};

export const spsLiteBackendNavbarSimple: ISpsLiteBackendNavbar = {
  id: 1,
  title: `Public Page Navbar`,
  uid: `public-page-navbar`,
  locale: `en`,
  variant: `simple`,
  className: null,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [{ ...spsLiteBackendNavbarBlockSimple }],
};

export const spsLiteBackendFooterSimple: ISpsLiteBackendNavbar = {
  id: 1,
  title: `Public Page Footer`,
  uid: `public-page-footer`,
  locale: `en`,
  variant: `simple`,
  className: null,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  pageBlocks: [{ ...spsLiteBackendFooterBlockSimple }],
};

export const spsLiteBackendLayoutSimple: ISpsLiteBackendLayout = {
  id: 3,
  locale: `en`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  title: `Public Page Layout`,
  uid: `public-page-layout`,
  variant: `simple`,
  sidebar: spsLiteBackendSidebarSimple,
  topbar: spsLiteBackendTopbarSimple,
  footer: spsLiteBackendFooterSimple,
  navbar: spsLiteBackendNavbarSimple,
  className: null,
};

export const spsLiteBackendPageMainPage: ISpsLiteBackendPage = {
  id: 3,
  locale: `en`,
  title: `Main Page`,
  url: `/`,
  layout: spsLiteBackendLayoutSimple,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  localizations: [],
  pageBlocks: [{ ...spsLiteBackendHeroSectionBlockSimpleCentered }],
};
