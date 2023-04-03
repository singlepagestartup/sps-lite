import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendForm,
  ISpsLiteBackendModal,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "./sps-lite";

export interface IBackendTier extends ISpsLiteBackendTier {}

export interface IBackendModal extends ISpsLiteBackendModal {}

export interface IBackendForm extends ISpsLiteBackendForm {}

export interface IBackendReview extends ISpsLiteBackendReview {}

export interface IBackendSlider extends ISpsLiteBackendSlider {}

export interface IBackendCurrency extends ISpsLiteBackendCurrency {}
