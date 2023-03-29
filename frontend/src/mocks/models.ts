import {
  IBackendFooter,
  IBackendForm,
  IBackendNavbar,
  IBackendReview,
  IBackendTier,
  IBackendTopbar,
} from "types/models";
import {
  backendButtonDefault,
  backendButtonsArraySimple,
  backendEmailInput,
  backendFeature,
  backendNameInput,
  backendPolicyInput,
  backendQuestionInput,
  backendTierInput,
} from "./components";

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
  cover: {
    id: 278,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/pexels_edmond_dantes_4347368_225cc5ea44.jpg`,
  },
} as IBackendReview;

export const backendFooterFourColumnsWithCompanyMission = {
  id: 1,
  copyrights: `&copy; 2023 Single Page Startup. All rights reserved.`,
  description: `Making the world a better place through constructing elegant hierarchies.`,
  variant: `four-columns-with-company-mission`,
  locale: `en`,
  logo: {
    id: 273,
    name: `sps-full black.svg`,
    alternativeText: ``,
    caption: null,
    width: 2226,
    height: 340,
    formats: null,
    hash: `sps_full_black_72b5a055d3`,
    ext: `.svg`,
    mime: `image/svg+xml`,
    size: 1.97,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/sps_full_black_72b5a055d3.svg`,
    previewUrl: null,
    provider: `aws-s3`,
    providerMetadata: null,
    createdAt: `2023-02-25T06:24:25.163Z`,
    updatedAt: `2023-02-25T06:24:25.163Z`,
  },
  socialNetworksButtons: Array(3).fill(backendButtonsArraySimple),
  policiesButtons: Array(3).fill(backendButtonsArraySimple),
  buttonsArrays: Array(3).fill(backendButtonsArraySimple),
} as IBackendFooter;

export const backendNavbarSimpleLinksOnLeft = {
  variant: `simple-links-on-left`,
  logo: {
    id: 273,
    name: `sps-full black.svg`,
    alternativeText: ``,
    caption: null,
    width: 2226,
    height: 340,
    formats: null,
    hash: `sps_full_black_72b5a055d3`,
    ext: `.svg`,
    mime: `image/svg+xml`,
    size: 1.97,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/sps_full_black_72b5a055d3.svg`,
    previewUrl: null,
    provider: `aws-s3`,
    providerMetadata: null,
    createdAt: `2023-02-25T06:24:25.163Z`,
    updatedAt: `2023-02-25T06:24:25.163Z`,
  },
} as IBackendNavbar;

export const backendTopbarSimple = {
  title: `Hello, Topbar`,
  variant: `simple`,
  buttons: Array(3).fill(backendButtonDefault),
} as IBackendTopbar;
