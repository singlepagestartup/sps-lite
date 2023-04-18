import {
  ISpsLiteBackendButton,
  ISpsLiteBackendButtonsArray,
  ISpsLiteBackendFaq,
  ISpsLiteBackendFeature,
  ISpsLiteBackendInput,
  ISpsLiteBackendLogotype,
  ISpsLiteBackendSlide,
} from "types/components/elements/sps-lite";
import {
  spsLiteUploadPluginBackendMediaTableAndHands,
  spsLiteUploadPluginBackendMediaRoundIcon,
  spsLiteUploadPluginBackendMediaLogotypeIcon,
} from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendButtonSecondary: ISpsLiteBackendButton = {
  id: 4,
  title: `Button`,
  url: `https://nextjs.com`,
  variant: `secondary`,
  __component: `elements.button`,
  description: null,
  className: null,
  additionalAttributes: null,
  flyoutMenu: null,
};

export const spsLiteBackendButtonPrimary: ISpsLiteBackendButton = {
  ...spsLiteBackendButtonSecondary,
  variant: `primary`,
};

export const spsLiteBackendButtonText: ISpsLiteBackendButton = {
  ...spsLiteBackendButtonSecondary,
  variant: `text`,
};

export const spsLiteBackendButtonsArraySimple: ISpsLiteBackendButtonsArray = {
  id: 5,
  __component: `elements.buttons-array`,
  title: `Buttons Array`,
  buttons: [spsLiteBackendButtonSecondary, spsLiteBackendButtonSecondary],
  variant: `simple`,
  description: null,
  className: null,
  url: null,
};

export const spsLiteBackendFaq: ISpsLiteBackendFaq = {
  id: 3,
  __component: `elements.faq`,
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
};

export const spsLiteBackendFeature: ISpsLiteBackendFeature = {
  id: 136,
  __component: `elements.feature`,
  title: `Конструктор PageBlock'ов`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  subtitle: `Не повторяйся`,
  media: [{ ...spsLiteUploadPluginBackendMediaRoundIcon }],
};

export const spsLiteBackendNameInput: ISpsLiteBackendInput = {
  id: 56,
  __component: `elements.input`,
  placeholder: `Введите ваше имя`,
  component: `text`,
  isRequired: true,
  value: null,
  name: `name`,
  label: `Имя`,
  className: `col-span-4`,
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendEmailInput: ISpsLiteBackendInput = {
  id: 57,
  __component: `elements.input`,
  placeholder: `Введите вашу электронную почту`,
  component: `text`,
  isRequired: true,
  value: null,
  name: `email`,
  label: `Электронная почта`,
  className: `col-span-4`,
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendTierInput: ISpsLiteBackendInput = {
  id: 58,
  __component: `elements.input`,
  placeholder: `Выберите тариф`,
  component: `listbox`,
  isRequired: false,
  value: null,
  name: `tier`,
  label: `Тариф`,
  className: `col-span-4`,
  type: null,
  multiple: null,
  options: [
    {
      id: 24,
      __component: `elements.input-option`,
      title: `Lite`,
      description: null,
    },
    {
      id: 25,
      __component: `elements.input-option`,
      title: `Pro`,
      description: null,
    },
  ],
};

export const spsLiteBackendQuestionInput: ISpsLiteBackendInput = {
  id: 59,
  __component: `elements.input`,
  placeholder: `Напишите ваш вопрос`,
  component: `text`,
  isRequired: false,
  value: null,
  name: `querstion`,
  label: `Вопрос`,
  className: `col-span-4`,
  type: `textarea`,
  multiple: null,
  options: [],
};

export const spsLiteBackendPolicyInput: ISpsLiteBackendInput = {
  id: 60,
  __component: `elements.input`,
  placeholder: null,
  component: `switch`,
  isRequired: true,
  value: null,
  name: `policy`,
  label: `Я согласен с Политикой конфиденциальности`,
  className: `col-span-4`,
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendLogotype: ISpsLiteBackendLogotype = {
  id: 5,
  __component: `elements.logotype`,
  media: [{ ...spsLiteUploadPluginBackendMediaLogotypeIcon }],
  additionalMedia: null,
  title: ``,
  url: `https://singlepagestartup.com`,
};

export const spsLiteBackendSlide: ISpsLiteBackendSlide = {
  id: 1,
  __component: `elements.slide`,
  title: `Конструктор блоков страниц`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  subtitle: null,
  media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  buttons: [{ ...spsLiteBackendButtonSecondary }],
};
