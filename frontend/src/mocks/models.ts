import {
  IBackendCurrency,
  IBackendForm,
  IBackendMedia,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
  IBackendReview,
  IBackendTier,
} from "types/models";
import {
  backendButtonDefault,
  backendButtonsArraySimple,
  backendEmailInput,
  backendFeature,
  backendFeatureSectionBlock,
  backendLogotype,
  backendMediaRoundIcon,
  backendMediaTableAndHands,
  backendNameInput,
  backendPolicyInput,
  backendQuestionInput,
  backendTierInput,
} from "./components";
import { IPublicPage } from "types";

export interface IBackendMeta {
  title?: string | null;
  description?: string | null;
  favicon?: IBackendMedia | null;
  image?: IBackendMedia | null;
  domain?: string | null;
  gtmKey?: string | null;
  script?: string | null;
}

export const backendCurrency = {
  title: `USD`,
  unicode: `$`,
  isDefault: true,
} as IBackendCurrency;

export const backendTier = {
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
  features: Array(4).fill(backendFeature),
  currency: backendCurrency,
  buttons: [backendButtonDefault],
} as IBackendTier;

export const backendForm = {
  id: 1,
  title: `Есть вопросы по продукту?`,
  subtitle: null,
  description: `Заполните форму и мы свяжемся с вами в ближайшее время`,
  uid: `question`,
  createdAt: `2023-02-14T10:12:40.873Z`,
  updatedAt: `2023-03-26T20:40:29.554Z`,
  publishedAt: `2023-02-14T22:44:48.245Z`,
  inputs: [
    backendNameInput,
    backendEmailInput,
    backendTierInput,
    backendQuestionInput,
    backendPolicyInput,
  ],
  button: backendButtonDefault,
} as IBackendForm;

export const backendReview = {
  id: 5,
  name: `Emily Wilson`,
  title: `Exceptional Startup with Great Potential`,
  description: `I had the pleasure of working with this startup and I was very impressed with their innovation and dedication to their customers. Their team is very knowledgeable and professional and I am confident that they have great potential for future success. I am looking forward to seeing what new innovations they come up with next. I highly recommend this startup to anyone looking for innovative solutions.`,
  subtitle: `Looking Forward to Future Innovations`,
  rating: 5,
  createdAt: `2023-03-12T11:34:52.690Z`,
  media: [backendMediaTableAndHands],
  additionalMedia: null,
} as IBackendReview;

export const backendPublicPageFooterFourColumnsWithCompanyMission = {
  id: 1,
  copyrights: `&copy; 2023 Single Page Startup. All rights reserved.`,
  description: `Making the world a better place through constructing elegant hierarchies.`,
  variant: `four-columns-with-company-mission`,
  locale: `en`,
  logotype: backendLogotype,
  socialNetworksButtons: Array(3).fill(backendButtonsArraySimple),
  policiesButtons: Array(3).fill(backendButtonsArraySimple),
  buttonsArrays: Array(3).fill(backendButtonsArraySimple),
} as IBackendPublicPageFooter;

export const backendPublicPageNavbarSimpleLinksOnLeft = {
  variant: `simple-links-on-left`,
  logotype: backendLogotype,
} as IBackendPublicPageNavbar;

export const backendPublicPageTopbarSimple = {
  title: `Hello, Topbar`,
  variant: `simple`,
  buttons: Array(3).fill(backendButtonDefault),
} as IBackendPublicPageTopbar;

export const backendPublicPageLayout = {
  variant: `simple`,
} as IBackendPublicPageLayout;

export const backendMeta = {
  id: 4,
  title: `Lite Single Page Startup`,
  description: `The fastest way to create startup`,
  script: null,
  gtmKey: null,
  createdAt: `2023-03-31T15:14:49.896Z`,
  updatedAt: `2023-04-02T11:55:25.729Z`,
  publishedAt: `2023-02-14T22:43:25.891Z`,
  locale: `en`,
  favicon: backendMediaRoundIcon,
  _meta: {},
} as IBackendMeta;

export const backendPublicPage = {
  id: 15,
  createdAt: `2023-03-31T16:24:14.747Z`,
  updatedAt: `2023-04-02T11:55:24.531Z`,
  publishedAt: `2023-03-31T15:16:22.773Z`,
  locale: `en`,
  pageBlocks: [
    {
      ...backendFeatureSectionBlock,
      _Component: `page-blocks.features-section-block`,
    },
  ],
  _meta: {},
  publicPageLayout: backendPublicPageLayout,
  meta: backendMeta,
  publicPageTopbar: backendPublicPageTopbarSimple,
  publicPageNavbar: backendPublicPageNavbarSimpleLinksOnLeft,
  publicPageFooter: backendPublicPageFooterFourColumnsWithCompanyMission,
} as IPublicPage;
