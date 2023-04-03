import {
  IBackendMeta,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types";
import {
  backendButtonDefault,
  backendButtonsArraySimple,
  backendLogotype,
} from "./elements";
import { backendMediaRoundIcon } from "./strapi";

export const backendPublicPageFooterFourColumnsWithCompanyMission = {
  id: 1,
  copyrights: `&copy; 2023 Single Page Startup. All rights reserved.`,
  description: `Making the world a better place through constructing elegant hierarchies.`,
  variant: `four-columns-with-company-mission`,
  locale: `en`,
  logotype: backendLogotype,
  socialNetworksButtons: Array(3).fill(backendButtonsArraySimple),
  policiesButtons: Array(3).fill(backendButtonsArraySimple),
  buttonsArrays: Array(3).fill(backendButtonsArraySimple),
} as IBackendPublicPageFooter;

export const backendPublicPageNavbarSimpleLinksOnLeft = {
  id: 45,
  variant: `simple-links-on-left`,
  logotype: backendLogotype,
} as IBackendPublicPageNavbar;

export const backendPublicPageTopbarSimple = {
  id: 43,
  title: `Hello, Topbar`,
  variant: `simple`,
  buttons: Array(3).fill(backendButtonDefault),
} as IBackendPublicPageTopbar;

export const backendPublicPageLayout = {
  id: 4,
  variant: `simple`,
} as IBackendPublicPageLayout;

export const backendMeta = {
  id: 4,
  title: `Lite Single Page Startup`,
  description: `The fastest way to create startup`,
  script: null,
  gtmKey: null,
  createdAt: `2023-03-31T15:14:49.896Z`,
  updatedAt: `2023-04-02T11:55:25.729Z`,
  publishedAt: `2023-02-14T22:43:25.891Z`,
  locale: `en`,
  favicon: backendMediaRoundIcon,
  _meta: {},
} as IBackendMeta;
