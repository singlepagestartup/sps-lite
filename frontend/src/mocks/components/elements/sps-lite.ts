import {
  ISpsLiteBackendButton,
  ISpsLiteBackendButtonsArray,
  ISpsLiteBackendFaq,
  ISpsLiteBackendFeature,
  ISpsLiteBackendInput,
  ISpsLiteBackendLogotype,
  ISpsLiteBackendSlide,
} from "types/components/elements/sps-lite";
import { spsLiteBackendFlyoutSimple } from "~mocks/collection-types/sps-lite";
import {
  spsLiteUploadPluginBackendMediaTableAndHands,
  spsLiteUploadPluginBackendMediaRoundIcon,
  spsLiteUploadPluginBackendMediaLogotypeIcon,
} from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendButtonSecondary: ISpsLiteBackendButton = {
  id: 4,
  title: "Button",
  url: "https://nextjs.com",
  variant: "secondary",
  __component: "elements.button",
  description: null,
  className: null,
  additionalAttributes: null,
  flyout: null,
};

export const spsLiteBackendButtonTextIcon: ISpsLiteBackendButton = {
  id: 4,
  title: null,
  url: "https://nextjs.com",
  variant: "text",
  media: [spsLiteUploadPluginBackendMediaRoundIcon],
  __component: "elements.button",
  description: null,
  className: null,
  additionalAttributes: null,
  flyout: null,
};

export const spsLiteBackendButtonSecondaryWithFlyoutMenu: ISpsLiteBackendButton =
  {
    id: 4,
    title: "Button",
    url: null,
    variant: "secondary",
    __component: "elements.button",
    description: null,
    className: null,
    additionalAttributes: null,
    flyout: { ...spsLiteBackendFlyoutSimple },
  };

export const spsLiteBackendButtonPrimary: ISpsLiteBackendButton = {
  ...spsLiteBackendButtonSecondary,
  variant: "primary",
};

export const spsLiteBackendButtonText: ISpsLiteBackendButton = {
  ...spsLiteBackendButtonSecondary,
  variant: "text",
};

export const spsLiteBackendButtonsArrayRowButtonsTextMedia: ISpsLiteBackendButtonsArray =
  {
    id: 5,
    __component: "elements.buttons-array",
    additionalAttributes: null,
    title: null,
    buttons: [
      { ...spsLiteBackendButtonTextIcon },
      { ...spsLiteBackendButtonTextIcon },
    ],
    variant: "row",
    description: null,
    className: null,
    url: null,
  };

export const spsLiteBackendButtonsArrayRowButtonsText: ISpsLiteBackendButtonsArray =
  {
    id: 5,
    __component: "elements.buttons-array",
    additionalAttributes: null,
    title: null,
    buttons: [{ ...spsLiteBackendButtonText }, { ...spsLiteBackendButtonText }],
    variant: "row",
    description: null,
    className: null,
    url: null,
  };

export const spsLiteBackendButtonsArrayColumnWithTitleButtonsSecondary: ISpsLiteBackendButtonsArray =
  {
    id: 5,
    __component: "elements.buttons-array",
    additionalAttributes: null,
    title: "Column With Title",
    buttons: [
      { ...spsLiteBackendButtonSecondary },
      { ...spsLiteBackendButtonSecondary },
    ],
    variant: "column-with-title",
    description: null,
    className: null,
    url: null,
  };

export const spsLiteBackendButtonsArrayColumnWithTitleButtonsText: ISpsLiteBackendButtonsArray =
  {
    id: 5,
    __component: "elements.buttons-array",
    additionalAttributes: null,
    title: "Column With Title",
    buttons: [{ ...spsLiteBackendButtonText }, { ...spsLiteBackendButtonText }],
    variant: "column-with-title",
    description: null,
    className: null,
    url: null,
  };

export const spsLiteBackendFaq: ISpsLiteBackendFaq = {
  id: 3,
  __component: "elements.faq",
  title: "Question",
  description:
    "Your startup's international expansion is a breeze with our boilerplate's built-in multilingual support. Just select the languages you want to support, and you're good to go.",
};

export const spsLiteBackendFeature: ISpsLiteBackendFeature = {
  id: 136,
  __component: "elements.feature",
  title: "Don't repeat yourself",
  description:
    "SignlePageStartup is designed to help you efficiently create a MVP that you can launch quickly to gather customer feedback and validate your ideas. Here's what you can expect from the MVP-ready feature.",
  subtitle: "MVP-ready",
  media: [{ ...spsLiteUploadPluginBackendMediaRoundIcon }],
};

export const spsLiteBackendNameInput: ISpsLiteBackendInput = {
  id: 56,
  __component: "elements.input",
  placeholder: "Type your name",
  variant: "text",
  isRequired: true,
  value: null,
  name: "name",
  label: "Name",
  className: "col-span-4",
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendEmailInput: ISpsLiteBackendInput = {
  id: 57,
  __component: "elements.input",
  placeholder: "Type your email",
  variant: "text",
  isRequired: true,
  value: null,
  name: "email",
  label: "Email",
  className: "col-span-4",
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendTierInput: ISpsLiteBackendInput = {
  id: 58,
  __component: "elements.input",
  placeholder: "Choose tier",
  variant: "listbox",
  isRequired: false,
  value: null,
  name: "tier",
  label: "Tier",
  className: "col-span-4",
  type: null,
  multiple: null,
  options: [
    {
      id: 24,
      __component: "elements.input-option",
      title: "Lite",
      description: null,
    },
    {
      id: 25,
      __component: "elements.input-option",
      title: "Pro",
      description: null,
    },
  ],
};

export const spsLiteBackendQuestionInput: ISpsLiteBackendInput = {
  id: 59,
  __component: "elements.input",
  placeholder: "Type your question",
  variant: "text",
  isRequired: false,
  value: null,
  name: "querstion",
  label: "Question",
  className: "col-span-4",
  type: "textarea",
  multiple: null,
  options: [],
};

export const spsLiteBackendPolicyInput: ISpsLiteBackendInput = {
  id: 60,
  __component: "elements.input",
  placeholder: null,
  variant: "switch",
  isRequired: true,
  value: null,
  name: "policy",
  label: "I agree with the privacy policy",
  className: "col-span-4",
  type: null,
  multiple: null,
  options: [],
};

export const spsLiteBackendLogotype: ISpsLiteBackendLogotype = {
  id: 5,
  __component: "elements.logotype",
  media: [{ ...spsLiteUploadPluginBackendMediaLogotypeIcon }],
  additionalMedia: null,
  title: "",
  url: "https://singlepagestartup.com",
};

export const spsLiteBackendSlide: ISpsLiteBackendSlide = {
  id: 1,
  __component: "elements.slide",
  title: "Page Builder",
  description:
    "Leverage our pre-built navigation elements, forms, photo galleries, text blocks, CTA elements, and more to create a visually appealing and engaging user experience with minimal effort.",
  subtitle: null,
  media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  buttons: [{ ...spsLiteBackendButtonSecondary }],
};
