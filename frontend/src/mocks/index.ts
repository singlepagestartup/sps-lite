import { IBackendPublicPage } from "types";
import {
  backendMeta,
  backendPublicPageFooterFourColumnsWithCompanyMission,
  backendPublicPageLayout,
  backendPublicPageNavbarSimpleLinksOnLeft,
  backendPublicPageTopbarSimple,
} from "./single-types";
import { backendFeatureSectionBlockSimpleThreeColumn } from "./page-blocks";

export const backendPublicPage = {
  id: 15,
  createdAt: `2023-03-31T16:24:14.747Z`,
  updatedAt: `2023-04-02T11:55:24.531Z`,
  publishedAt: `2023-03-31T15:16:22.773Z`,
  locale: `en`,
  pageBlocks: [backendFeatureSectionBlockSimpleThreeColumn],
  _meta: {},
  publicPageLayout: backendPublicPageLayout,
  meta: backendMeta,
  publicPageTopbar: backendPublicPageTopbarSimple,
  publicPageNavbar: backendPublicPageNavbarSimpleLinksOnLeft,
  publicPageFooter: backendPublicPageFooterFourColumnsWithCompanyMission,
} as IBackendPublicPage;
