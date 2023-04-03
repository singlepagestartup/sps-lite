import {
  ISpsLiteBackendMainPage,
  ISpsLiteBackendMeta,
  ISpsLiteBackendNotFoundPage,
  ISpsLiteBackendPublicPageFooter,
  ISpsLiteBackendPublicPageLayout,
  ISpsLiteBackendPublicPageNavbar,
  ISpsLiteBackendPublicPageTopbar,
} from "./sps-lite";

export interface IBackendPublicPageFooter
  extends ISpsLiteBackendPublicPageFooter {}

export interface IBackendPublicPageNavbar
  extends ISpsLiteBackendPublicPageNavbar {}

export interface IBackendPublicPageTopbar
  extends ISpsLiteBackendPublicPageTopbar {}

export interface IBackendPublicPageLayout
  extends ISpsLiteBackendPublicPageLayout {}

export interface IBackendMeta extends ISpsLiteBackendMeta {}

export interface IBackendMainPage extends ISpsLiteBackendMainPage {}

export interface IBackendNotFoundPage extends ISpsLiteBackendNotFoundPage {}
