import { ISpsLiteMainPage } from "types/pages/sps-lite";
import {
  spsLiteBackendMainPage,
  spsLiteBackendMeta,
  spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
  spsLiteBackendPublicPageLayout,
  spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  spsLiteBackendPublicPageTopbarSimple,
} from "~mocks/single-types/sps-lite";

export const spsLiteMainPage: ISpsLiteMainPage = {
  ...spsLiteBackendMainPage,
  publicPageLayout: spsLiteBackendPublicPageLayout,
  meta: spsLiteBackendMeta,
  publicPageTopbar: spsLiteBackendPublicPageTopbarSimple,
  publicPageNavbar: spsLiteBackendPublicPageNavbarSimpleLinksOnLeft,
  publicPageFooter: spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission,
};
