import { IMainPage } from "pages";
import {
  backendMainPage,
  backendMeta,
  backendPublicPageFooterFourColumnsWithCompanyMission,
  backendPublicPageLayout,
  backendPublicPageNavbarSimpleLinksOnLeft,
  backendPublicPageTopbarSimple,
} from "~mocks/single-types/sps-lite";

export const mainPage = {
  ...backendMainPage,
  _meta: {},
  publicPageLayout: backendPublicPageLayout,
  meta: backendMeta,
  publicPageTopbar: backendPublicPageTopbarSimple,
  publicPageNavbar: backendPublicPageNavbarSimpleLinksOnLeft,
  publicPageFooter: backendPublicPageFooterFourColumnsWithCompanyMission,
} as IMainPage;
