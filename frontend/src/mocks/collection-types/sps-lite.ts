import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendForm,
  ISpsLiteBackendModal,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "types/collection-types/sps-lite";
import {
  spsLiteBackendButtonDefault,
  spsLiteBackendEmailInput,
  spsLiteBackendFeature,
  spsLiteBackendNameInput,
  spsLiteBackendPolicyInput,
  spsLiteBackendQuestionInput,
  spsLiteBackendSlide,
  spsLiteBackendTierInput,
} from "~mocks/components/elements/sps-lite";
import { spsLiteUploadPluginBackendMediaTableAndHands } from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendSliderFadeWithPreviews = {
  slides: Array(4).fill(spsLiteBackendSlide),
  variant: `fade-with-previews`,
  aspectRatioClassName: `aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10`,
  showBackdrop: true,
  showFullScreen: true,
  showPreviews: true,
} as ISpsLiteBackendSlider;

export const spsLiteBackendCurrency = {
  title: `USD`,
  unicode: `$`,
  isDefault: true,
} as ISpsLiteBackendCurrency;

export const spsLiteBackendTier = {
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
  currency: spsLiteBackendCurrency,
  buttons: [spsLiteBackendButtonDefault],
} as ISpsLiteBackendTier;

export const spsLiteBackendForm = {
  id: 1,
  title: `Есть вопросы по продукту?`,
  subtitle: null,
  description: `Заполните форму и мы свяжемся с вами в ближайшее время`,
  uid: `question`,
  createdAt: `2023-02-14T10:12:40.873Z`,
  updatedAt: `2023-03-26T20:40:29.554Z`,
  publishedAt: `2023-02-14T22:44:48.245Z`,
  inputs: [
    spsLiteBackendNameInput,
    spsLiteBackendEmailInput,
    spsLiteBackendTierInput,
    spsLiteBackendQuestionInput,
    spsLiteBackendPolicyInput,
  ],
  button: spsLiteBackendButtonDefault,
} as ISpsLiteBackendForm;

export const spsLiteBackendReview = {
  id: 5,
  name: `Emily Wilson`,
  title: `Exceptional Startup with Great Potential`,
  description: `I had the pleasure of working with this startup and I was very impressed with their innovation and dedication to their customers. Their team is very knowledgeable and professional and I am confident that they have great potential for future success. I am looking forward to seeing what new innovations they come up with next. I highly recommend this startup to anyone looking for innovative solutions.`,
  subtitle: `Looking Forward to Future Innovations`,
  rating: 5,
  createdAt: `2023-03-12T11:34:52.690Z`,
  media: [spsLiteUploadPluginBackendMediaTableAndHands],
  additionalMedia: null,
} as ISpsLiteBackendReview;

export const spsLiteBackendModal = {
  id: 1,
  title: `Hello world`,
  uid: `hello-world`,
  dialog_panel_class_name: `container`,
  variant: `simple`,
  createdAt: `2023-03-28T11:07:56.252Z`,
  updatedAt: `2023-03-28T11:07:57.474Z`,
  publishedAt: `2023-03-28T11:07:57.457Z`,
  dialogPanelClassName: null,
  page_blocks: [
    {
      id: 6,
      __component: `page-blocks.hero-section-block`,
      title: `Hello world`,
      description: `Создай свой стартап за несколько часов и постепенно расширяя функционал доработай его до полноценного продукта, при этом не тратя время на разработку функционала с нуля.`,
      variant: `simple-centered`,
      anchor: null,
      class_name: null,
      buttons: [],
      background: {
        data: null,
      },
      media: {
        data: null,
      },
    },
  ],
} as ISpsLiteBackendModal;
