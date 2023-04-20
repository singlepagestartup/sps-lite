import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendForm,
  ISpsLiteBackendLayout,
  ISpsLiteBackendLocale,
  ISpsLiteBackendModal,
  ISpsLiteBackendPage,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "./sps-lite";

/**
 * Interfaces for RTK
 */

export interface IBackendTier extends ISpsLiteBackendTier {}

export interface IBackendModal extends ISpsLiteBackendModal {}

export interface IBackendForm extends ISpsLiteBackendForm {}

export interface IBackendReview extends ISpsLiteBackendReview {}

export interface IBackendSlider extends ISpsLiteBackendSlider {}

export interface IBackendCurrency extends ISpsLiteBackendCurrency {}

export interface IBackendPage extends ISpsLiteBackendPage {}

export interface IBackendLayout extends ISpsLiteBackendLayout {}

export interface IBackendLocale extends ISpsLiteBackendLocale {}
