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

export const backendPublicPageFooterFourColumnsWithCompanyMission: IBackendPublicPageFooter =
  {
    ...spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
  };

export const backendPublicPageNavbarSimpleLinksOnLeft: IBackendPublicPageNavbar =
  {
    ...spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  };

export const backendPublicPageTopbarSimple: IBackendPublicPageTopbar = {
  ...spsLiteBackendPublicPageTopbarSimple,
};

export const backendPublicPageLayout: IBackendPublicPageLayout = {
  ...spsLiteBackendPublicPageLayout,
};

export const backendMeta: IBackendMeta = {
  ...spsLiteBackendMeta,
};

export const backendMainPage: IBackendMainPage = {
  ...spsLiteBackendMainPage,
};
