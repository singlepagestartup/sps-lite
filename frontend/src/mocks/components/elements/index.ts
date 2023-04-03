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

export const backendButtonDefault = {
  ...spsLiteBackendButtonDefault,
} as IBackendButton;

export const backendButtonPrimary = {
  ...spsLiteBackendButtonPrimary,
} as IBackendButton;

export const backendButtonBottomLine = {
  ...spsLiteBackendButtonBottomLine,
} as IBackendButton;

export const backendButtonsArraySimple = {
  ...spsLiteBackendButtonsArraySimple,
} as IBackendButtonsArray;

export const backendButtonsArrayDropdown = {
  ...spsLiteBackendButtonsArrayDropdown,
} as IBackendButtonsArray;

export const backendFaq = {
  ...spsLiteBackendFaq,
} as IBackendFaq;

export const backendFeature = {
  ...spsLiteBackendFeature,
} as IBackendFeature;

export const backendNameInput = {
  ...spsLiteBackendNameInput,
} as IBackendInput;

export const backendEmailInput = {
  ...spsLiteBackendEmailInput,
} as IBackendInput;

export const backendTierInput = {
  ...spsLiteBackendTierInput,
} as IBackendInput;

export const backendQuestionInput = {
  ...spsLiteBackendQuestionInput,
} as IBackendInput;

export const backendPolicyInput = {
  ...spsLiteBackendPolicyInput,
} as IBackendInput;

export const backendLogotype = {
  ...spsLiteBackendLogotype,
} as IBackendLogotype;

export const backendSlide = {
  ...spsLiteBackendSlide,
} as IBackendSlide;
