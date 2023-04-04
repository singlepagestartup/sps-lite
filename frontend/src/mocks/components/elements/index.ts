import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendFaq,
  IBackendFeature,
  IBackendInput,
  IBackendLogotype,
  IBackendSlide,
} from "types/components/elements";
import {
  spsLiteBackendButtonBottomLine,
  spsLiteBackendButtonDefault,
  spsLiteBackendButtonPrimary,
  spsLiteBackendButtonsArrayDropdown,
  spsLiteBackendButtonsArraySimple,
  spsLiteBackendEmailInput,
  spsLiteBackendFaq,
  spsLiteBackendFeature,
  spsLiteBackendLogotype,
  spsLiteBackendNameInput,
  spsLiteBackendPolicyInput,
  spsLiteBackendQuestionInput,
  spsLiteBackendSlide,
  spsLiteBackendTierInput,
} from "./sps-lite";

export const backendButtonDefault: IBackendButton = {
  ...spsLiteBackendButtonDefault,
};

export const backendButtonPrimary: IBackendButton = {
  ...spsLiteBackendButtonPrimary,
};

export const backendButtonBottomLine: IBackendButton = {
  ...spsLiteBackendButtonBottomLine,
};

export const backendButtonsArraySimple: IBackendButtonsArray = {
  ...spsLiteBackendButtonsArraySimple,
};

export const backendButtonsArrayDropdown: IBackendButtonsArray = {
  ...spsLiteBackendButtonsArrayDropdown,
};

export const backendFaq: IBackendFaq = {
  ...spsLiteBackendFaq,
};

export const backendFeature: IBackendFeature = {
  ...spsLiteBackendFeature,
};

export const backendNameInput: IBackendInput = {
  ...spsLiteBackendNameInput,
};

export const backendEmailInput: IBackendInput = {
  ...spsLiteBackendEmailInput,
};

export const backendTierInput: IBackendInput = {
  ...spsLiteBackendTierInput,
};

export const backendQuestionInput: IBackendInput = {
  ...spsLiteBackendQuestionInput,
};

export const backendPolicyInput: IBackendInput = {
  ...spsLiteBackendPolicyInput,
};

export const backendLogotype: IBackendLogotype = {
  ...spsLiteBackendLogotype,
};

export const backendSlide: IBackendSlide = {
  ...spsLiteBackendSlide,
};
