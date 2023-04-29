import {
  ISpsLiteBackendCurrency,
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

export type IBackendTier = ISpsLiteBackendTier;

export type IBackendModal = ISpsLiteBackendModal;

export type IBackendForm = ISpsLiteBackendForm;

export type IBackendReview = ISpsLiteBackendReview;

export type IBackendSlider = ISpsLiteBackendSlider;

export type IBackendCurrency = ISpsLiteBackendCurrency;

export type IBackendPage = ISpsLiteBackendPage;

export type IBackendLayout = ISpsLiteBackendLayout;

export type IBackendNavbar = ISpsLiteBackendNavbar;

export type IBackendLocale = ISpsLiteBackendLocale;
