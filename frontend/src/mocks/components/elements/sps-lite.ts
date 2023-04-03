import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendFaq,
  IBackendFeature,
  IBackendInput,
  IBackendLogotype,
  IBackendSlide,
} from "types/components/elements/sps-lite";
import {
  backendMediaLogotypeIcon,
  backendMediaRoundIcon,
  backendMediaTableAndHands,
} from "~mocks/plugins/upload";

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

export const backendFeature = {
  id: 136,
  title: `Конструктор PageBlock'ов`,
  description: `Навигационные элементы, Формы, Галерея фотографий, Текстовые блоки, CTA элементы и многое другое уже сделано, нужно просто воспользоваться этим в ваших интересах.`,
  subtitle: `Не повторяйся`,
  media: [backendMediaRoundIcon],
} as IBackendFeature;

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
