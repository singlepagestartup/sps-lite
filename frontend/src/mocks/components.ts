import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendFaq,
  IBackendFeature,
  IBackendInput,
  IBackendLogotype,
  IBackendSlide,
} from "types/components";
import { IBackendMedia, IBackendSlider } from "types/models";
import { IFeaturesSectionBlock } from "~components/page-blocks/features-sections";

export const backendMediaTableAndHands = {
  id: 907,
  name: `home-page-02-hero-half-width.webp`,
  alternativeText: null,
  caption: null,
  width: 1360,
  height: 1536,
  hash: `home_page_02_hero_half_width_bf2b013645`,
  ext: `.webp`,
  mime: `image/webp`,
  size: 129.77,
  url: `https://721511.selcdn.ru/sps-rogwild/home_page_02_hero_half_width_bf2b013645.webp`,
  previewUrl: null,
  provider: `aws-s3`,
  providerMetadata: null,
  createdAt: `2023-04-01T20:54:54.396Z`,
  updatedAt: `2023-04-01T20:54:54.396Z`,
} as IBackendMedia;

export const backendMediaRoundIcon = {
  id: 918,
  name: `favicon.svg`,
  alternativeText: null,
  caption: null,
  width: 485,
  height: 485,
  formats: null,
  hash: `favicon_b4a4b84e1f`,
  ext: `.svg`,
  mime: `image/svg+xml`,
  size: 2.61,
  url: `https://721511.selcdn.ru/sps-rogwild/favicon_b4a4b84e1f.svg`,
  previewUrl: null,
  provider: `aws-s3`,
  providerMetadata: null,
  createdAt: `2023-04-01T21:02:54.372Z`,
  updatedAt: `2023-04-01T21:02:54.372Z`,
} as IBackendMedia;

export const backendMediaLogotypeIcon = {
  id: 918,
  name: `logo.svg`,
  alternativeText: null,
  caption: null,
  width: 485,
  height: 485,
  formats: null,
  hash: `logo_7c683dbd29`,
  ext: `.svg`,
  mime: `image/svg+xml`,
  size: 2.61,
  url: `https://721511.selcdn.ru/sps-lite-rogwild/logo_7c683dbd29.svg`,
  previewUrl: null,
  provider: `aws-s3`,
  providerMetadata: null,
  createdAt: `2023-04-01T21:02:54.372Z`,
  updatedAt: `2023-04-01T21:02:54.372Z`,
} as IBackendMedia;

export const backendFeature = {
  id: 136,
  title: `Конструктор PageBlock'ов`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  subtitle: `Не повторяйся`,
  media: [backendMediaRoundIcon],
} as IBackendFeature;

export const backendButtonDefault = {
  title: `Button`,
  url: `https://nextjs.com`,
  variant: `default`,
} as IBackendButton;

export const backendButtonPrimary = {
  ...backendButtonDefault,
  variant: `primary`,
} as IBackendButton;

export const backendButtonBottomLine = {
  ...backendButtonDefault,
  variant: `bottom-line`,
} as IBackendButton;

export const backendButtonsArraySimple = {
  title: `Buttons Array`,
  buttons: [backendButtonDefault, backendButtonDefault],
  variant: `simple`,
} as IBackendButtonsArray;

export const backendButtonsArrayDropdown = {
  ...backendButtonsArraySimple,
  variant: `dropdown`,
} as IBackendButtonsArray;

export const backendFaq = {
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
} as IBackendFaq;

export const backendNameInput = {
  id: 56,
  placeholder: `Введите ваше имя`,
  component: `text`,
  isRequired: true,
  value: null,
  name: `name`,
  label: `Имя`,
  className: null,
  type: null,
  multiple: null,
  options: [],
} as IBackendInput;

export const backendEmailInput = {
  id: 57,
  placeholder: `Введите вашу электронную почту`,
  component: `text`,
  isRequired: true,
  value: null,
  name: `email`,
  label: `Электронная почта`,
  className: null,
  type: null,
  multiple: null,
  options: [],
} as IBackendInput;

export const backendTierInput = {
  id: 58,
  placeholder: `Выберите тариф`,
  component: `listbox`,
  isRequired: false,
  value: null,
  name: `tier`,
  label: `Тариф`,
  className: null,
  type: null,
  multiple: null,
  options: [
    {
      id: 24,
      title: `Lite`,
      description: null,
    },
    {
      id: 25,
      title: `Pro`,
      description: null,
    },
  ],
} as IBackendInput;

export const backendQuestionInput = {
  id: 59,
  placeholder: `Напишите ваш вопрос`,
  component: `text`,
  isRequired: false,
  value: null,
  name: `querstion`,
  label: `Вопрос`,
  className: null,
  type: `textarea`,
  multiple: null,
  options: [],
} as IBackendInput;

export const backendPolicyInput = {
  id: 60,
  placeholder: null,
  component: `switch`,
  isRequired: true,
  value: null,
  name: `policy`,
  label: `Я согласен с Политикой конфиденциальности`,
  className: null,
  type: null,
  multiple: null,
  options: [],
} as IBackendInput;

export const backendLogotype = {
  media: [backendMediaLogotypeIcon],
  additionalMedia: null,
  title: ``,
  url: `https://singlepagestartup.com`,
} as IBackendLogotype;

export const backendSlide = {
  id: 1,
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  media: [backendMediaTableAndHands],
  buttons: [backendButtonDefault],
} as IBackendSlide;

export const backendSlider = {
  slides: Array(4).fill(backendSlide),
  variant: `fade-with-previews`,
  aspectRatioClassName: `aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10`,
  showBackdrop: true,
  showFullScreen: true,
  showPreviews: true,
} as IBackendSlider;

export const backendFeatureSectionBlock = {
  title: `Hello world`,
  variant: `simple-three-column`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  features: Array(4).fill(backendFeature),
} as IFeaturesSectionBlock;
