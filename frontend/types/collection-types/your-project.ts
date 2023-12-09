import { ISpsLiteBackendCurrency } from "~redux/services/backend/models/currency/interfaces/sps-lite";
import {
  ISpsLiteBackendFlyout,
  ISpsLiteBackendForm,
  ISpsLiteBackendLocale,
  ISpsLiteBackendMetatag,
  ISpsLiteBackendReview,
  ISpsLiteBackendSidebar,
  ISpsLiteBackendSlideOver,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
  ISpsLiteBackendTopbar,
} from "./sps-lite";

export interface IYourProjectBackendTier extends ISpsLiteBackendTier {}

export interface IYourProjectBackendForm extends ISpsLiteBackendForm {}

export interface IYourProjectBackendReview extends ISpsLiteBackendReview {}

export interface IYourProjectBackendSlider extends ISpsLiteBackendSlider {}

export interface IYourProjectBackendCurrency extends ISpsLiteBackendCurrency {}

export interface IYourProjectBackendSlideOver
  extends ISpsLiteBackendSlideOver {}

export interface IYourProjectBackendSidebar extends ISpsLiteBackendSidebar {}

export interface IYourProjectBackendMetatag extends ISpsLiteBackendMetatag {}

export interface IYourProjectBackendTopbar extends ISpsLiteBackendTopbar {}

export interface IYourProjectBackendFlyout extends ISpsLiteBackendFlyout {}

export interface IYourProjectBackendLocale extends ISpsLiteBackendLocale {}
