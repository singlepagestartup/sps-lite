import {
  IBackendMainPage,
  IBackendMeta,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types";
import {
  spsLiteBackendMainPage,
  spsLiteBackendMeta,
  spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
  spsLiteBackendPublicPageLayout,
  spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  spsLiteBackendPublicPageTopbarSimple,
} from "./sps-lite";

export const backendPublicPageFooterFourColumnsWithCompanyMission = {
  ...spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
} as IBackendPublicPageFooter;

export const backendPublicPageNavbarSimpleLinksOnLeft = {
  ...spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
} as IBackendPublicPageNavbar;

export const backendPublicPageTopbarSimple = {
  ...spsLiteBackendPublicPageTopbarSimple,
} as IBackendPublicPageTopbar;

export const backendPublicPageLayout = {
  ...spsLiteBackendPublicPageLayout,
} as IBackendPublicPageLayout;

export const backendMeta = {
  ...spsLiteBackendMeta,
} as IBackendMeta;

export const backendMainPage = {
  ...spsLiteBackendMainPage,
} as IBackendMainPage;
