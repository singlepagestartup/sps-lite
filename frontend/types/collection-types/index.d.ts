import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendForm,
  ISpsLiteBackendModal,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "./sps-lite";
import { ISpsProBackendTier } from "./sps-pro";

export interface IBackendTier extends ISpsProBackendTier {}

export interface IBackendModal extends ISpsLiteBackendModal {}

export interface IBackendForm extends ISpsLiteBackendForm {}

export interface IBackendReview extends ISpsLiteBackendReview {}

export interface IBackendSlider extends ISpsLiteBackendSlider {}

export interface IBackendCurrency extends ISpsLiteBackendCurrency {}
