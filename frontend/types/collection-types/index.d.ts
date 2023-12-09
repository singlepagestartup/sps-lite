import {
  IYourProjectBackendCurrency,
  IYourProjectBackendFlyout,
  IYourProjectBackendFooter,
  IYourProjectBackendForm,
  IYourProjectBackendLayout,
  IYourProjectBackendLocale,
  IYourProjectBackendMetatag,
  IYourProjectBackendReview,
  IYourProjectBackendSidebar,
  IYourProjectBackendSlideOver,
  IYourProjectBackendSlider,
  IYourProjectBackendTier,
  IYourProjectBackendTopbar,
} from "./your-project";

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

export interface IBackendTier extends IYourProjectBackendTier {}

export interface IBackendForm extends IYourProjectBackendForm {}

export interface IBackendReview extends IYourProjectBackendReview {}

export interface IBackendSlider extends IYourProjectBackendSlider {}

export interface IBackendCurrency extends IYourProjectBackendCurrency {}

export interface IBackendSlideOver extends IYourProjectBackendSlideOver {}

export interface IBackendSidebar extends IYourProjectBackendSidebar {}

export interface IBackendMetatag extends IYourProjectBackendMetatag {}

export interface IBackendTopbar extends IYourProjectBackendTopbar {}

export interface IBackendFlyout extends IYourProjectBackendFlyout {}

export interface IBackendLocale extends IYourProjectBackendLocale {}
