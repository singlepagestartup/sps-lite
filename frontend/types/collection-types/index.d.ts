import {
  ISpsLiteBackendCurrency,
  ISpsLiteBackendFlyout,
  ISpsLiteBackendForm,
  ISpsLiteBackendLayout,
  ISpsLiteBackendLocale,
  ISpsLiteBackendModal,
  ISpsLiteBackendNavbar,
  ISpsLiteBackendPage,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "./sps-lite";

/**
 * Interfaces for RTK
 */

export interface IBackendPagination {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface IBackendTier extends ISpsLiteBackendTier {}

export interface IBackendModal extends ISpsLiteBackendModal {}

export interface IBackendForm extends ISpsLiteBackendForm {}

export interface IBackendReview extends ISpsLiteBackendReview {}

export interface IBackendSlider extends ISpsLiteBackendSlider {}

export interface IBackendCurrency extends ISpsLiteBackendCurrency {}

export interface IBackendPage extends ISpsLiteBackendPage {}

export interface IBackendLayout extends ISpsLiteBackendLayout {}

export interface IBackendNavbar extends ISpsLiteBackendNavbar {}

export interface IBackendFlyout extends ISpsLiteBackendFlyout {}

export interface IBackendLocale extends ISpsLiteBackendLocale {}
