import {
  IBackendCurrency,
  IBackendForm,
  IBackendModal,
  IBackendReview,
  IBackendSlider,
  IBackendTier,
} from "types/collection-types";
import {
  spsLiteBackendCurrency,
  spsLiteBackendForm,
  spsLiteBackendModal,
  spsLiteBackendReview,
  spsLiteBackendSliderFadeWithPreviews,
  spsLiteBackendTier,
} from "./sps-lite";

export const backendSliderFadeWithPreviews: IBackendSlider = {
  ...spsLiteBackendSliderFadeWithPreviews,
};

export const backendCurrency: IBackendCurrency = {
  ...spsLiteBackendCurrency,
};

export const backendTier: IBackendTier = {
  ...spsLiteBackendTier,
};

export const backendForm: IBackendForm = {
  ...spsLiteBackendForm,
};

export const backendReview: IBackendReview = {
  ...spsLiteBackendReview,
};

export const backendModal: IBackendModal = {
  ...spsLiteBackendModal,
};
