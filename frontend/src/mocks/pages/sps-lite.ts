import {
  spsLiteBackendMainPage,
  spsLiteBackendMeta,
  spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
  spsLiteBackendPublicPageLayout,
  spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  spsLiteBackendPublicPageTopbarSimple,
} from "~mocks/single-types/sps-lite";

export const spsLiteMainPage = {
  ...spsLiteBackendMainPage,
  _meta: {},
  publicPageLayout: spsLiteBackendPublicPageLayout,
  meta: spsLiteBackendMeta,
  publicPageTopbar: spsLiteBackendPublicPageTopbarSimple,
  publicPageNavbar: spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  publicPageFooter: spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
};
