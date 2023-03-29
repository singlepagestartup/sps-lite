import {
  IBackendFaq,
  IBackendFeature,
  IBackendInput,
  IBackendLogo,
  IBackendSlide,
} from "types/components";
import { IBackendSlider } from "types/models";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import { IButton } from "~components/buttons/simple-buttons";

export const backendFeature = {
  id: 136,
  title: `Конструктор PageBlock'ов`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  subtitle: `Не повторяйся`,
  media: null,
  icon: {
    id: 264,
    name: `favicon.svg`,
    alternativeText: null,
    caption: null,
    width: 485,
    height: 485,
    formats: null,
    hash: `favicon_6353386f47`,
    ext: `.svg`,
    mime: `image/svg+xml`,
    size: 2.61,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/favicon_6353386f47.svg`,
    previewUrl: null,
    provider: `aws-s3`,
    providerMetadata: null,
    createdAt: `2023-02-14T22:48:52.546Z`,
    updatedAt: `2023-02-14T22:48:52.546Z`,
  },
} as IBackendFeature;

export const backendButtonDefault = {
  title: `Button`,
  url: `https://nextjs.com`,
  variant: `default`,
} as IButton;

export const backendButtonPrimary = {
  ...backendButtonDefault,
  variant: `primary`,
} as IButton;

export const backendButtonBottomLine = {
  ...backendButtonDefault,
  variant: `bottom-line`,
} as IButton;

export const backendButtonsArraySimple = {
  title: `Buttons Array`,
  buttons: [backendButtonDefault, backendButtonDefault],
  variant: `simple`,
} as IButtonsArray;

export const backendButtonsArrayDropdown = {
  ...backendButtonsArraySimple,
  variant: `dropdown`,
} as IButtonsArray;

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

export const backendLogo = {
  logo: {
    url: `https://721511.selcdn.ru/sps-lite-rogwild/favicon_7d4add0fa3.svg`,
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
    previewUrl: null,
    provider: `aws-s3`,
    providerMetadata: null,
    createdAt: `2023-02-25T06:24:25.163Z`,
    updatedAt: `2023-02-25T06:24:25.163Z`,
  },
  title: ``,
  logoMonochrome: null,
  url: `https://singlepagestartup.com`,
} as IBackendLogo;

export const backendSlide = {
  id: 1,
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  media: {
    id: 274,
    mime: `image/jpeg`,
    alternativeText: ``,
    url: `https://721511.selcdn.ru/sps-lite-rogwild/pexels_karolina_grabowska_5882683_798121d61e.jpg`,
  },
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
