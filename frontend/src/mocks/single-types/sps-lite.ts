import {
  ISpsLiteBackendMainPage,
  ISpsLiteBackendMeta,
  ISpsLiteBackendPublicPageFooter,
  ISpsLiteBackendPublicPageLayout,
  ISpsLiteBackendPublicPageNavbar,
  ISpsLiteBackendPublicPageTopbar,
} from "types/single-types/sps-lite";
import {
  spsLiteBackendButtonDefault,
  spsLiteBackendButtonsArraySimple,
  spsLiteBackendLogotype,
} from "~mocks/components/elements/sps-lite";
import { spsLiteBackendFeatureSectionBlockWithProductScreenshot } from "~mocks/components/page-blocks/sps-lite";
import { spsLiteUploadPluginBackendMediaRoundIcon } from "~mocks/plugins/upload/sps-lite";

export const spsLiteBackendPublicPageFooterFourColumnsWithCompanyMission = {
  id: 1,
  copyrights: `&copy; 2023 Single Page Startup. All rights reserved.`,
  description: `Making the world a better place through constructing elegant hierarchies.`,
  variant: `four-columns-with-company-mission`,
  locale: `en`,
  logotype: spsLiteBackendLogotype,
  socialNetworksButtons: Array(3).fill(spsLiteBackendButtonsArraySimple),
  policiesButtons: Array(3).fill(spsLiteBackendButtonsArraySimple),
  buttonsArrays: Array(3).fill(spsLiteBackendButtonsArraySimple),
} as ISpsLiteBackendPublicPageFooter;

export const spsLiteBackendPublicPageNavbarSimpleLinksOnLeft = {
  id: 45,
  variant: `simple-links-on-left`,
  logotype: spsLiteBackendLogotype,
} as ISpsLiteBackendPublicPageNavbar;

export const spsLiteBackendPublicPageTopbarSimple = {
  id: 43,
  title: `Hello, Topbar`,
  variant: `simple`,
  buttons: Array(3).fill(spsLiteBackendButtonDefault),
} as ISpsLiteBackendPublicPageTopbar;

export const spsLiteBackendPublicPageLayout = {
  id: 4,
  variant: `simple`,
} as ISpsLiteBackendPublicPageLayout;

export const spsLiteBackendMeta = {
  id: 4,
  title: `Lite Single Page Startup`,
  description: `The fastest way to create startup`,
  script: null,
  gtmKey: null,
  createdAt: `2023-03-31T15:14:49.896Z`,
  updatedAt: `2023-04-02T11:55:25.729Z`,
  publishedAt: `2023-02-14T22:43:25.891Z`,
  locale: `en`,
  favicon: spsLiteUploadPluginBackendMediaRoundIcon,
  _meta: {},
} as ISpsLiteBackendMeta;

export const spsLiteBackendMainPage = {
  id: 1,
  locale: `en`,
  createdAt: `2023-03-31T15:14:49.896Z`,
  updatedAt: `2023-04-02T11:55:25.729Z`,
  publishedAt: `2023-02-14T22:43:25.891Z`,
  pageBlocks: [spsLiteBackendFeatureSectionBlockWithProductScreenshot],
} as ISpsLiteBackendMainPage;
