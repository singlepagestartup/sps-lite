import { fa, faker } from "@faker-js/faker";
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
  title: faker.lorem.words(3),
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
    "To register on our website, go to the [registration page](https://singlepagestartup.com/auth/registration) and fill in the **required fields**.",
};

export const spsLiteBackendFeature: ISpsLiteBackendFeature = {
  id: 136,
  __component: "elements.feature",
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  subtitle: faker.lorem.sentences(1),
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
  min: null,
  max: null,
  step: null,
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
  min: null,
  max: null,
  step: null,
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
  min: null,
  max: null,
  step: null,
  multiple: null,
  options: [
    {
      id: 24,
      title: "Lite",
      description: null,
    },
    {
      id: 25,
      title: "Pro",
      description: null,
    },
  ],
};

export const spsLiteBackendQuestionInput: ISpsLiteBackendInput = {
  id: 59,
  __component: "elements.input",
  placeholder: faker.lorem.sentence(),
  variant: "text",
  isRequired: false,
  value: null,
  name: "querstion",
  label: faker.lorem.words(1),
  className: "col-span-4",
  type: "textarea",
  multiple: null,
  options: [],
  min: null,
  max: null,
  step: null,
};

export const spsLiteBackendPolicyInput: ISpsLiteBackendInput = {
  id: 60,
  __component: "elements.input",
  placeholder: null,
  variant: "switch",
  isRequired: true,
  value: null,
  name: "policy",
  label: faker.lorem.sentence(),
  className: "col-span-4",
  type: null,
  multiple: null,
  options: [],
  min: null,
  max: null,
  step: null,
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
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  subtitle: null,
  media: [{ ...spsLiteUploadPluginBackendMediaTableAndHands }],
  buttons: [{ ...spsLiteBackendButtonSecondary }],
};
