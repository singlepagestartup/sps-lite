import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import {
  ISpsLiteBackendMeta,
  ISpsLiteBackendPublicPageFooter,
  ISpsLiteBackendPublicPageLayout,
  ISpsLiteBackendPublicPageNavbar,
  ISpsLiteBackendPublicPageTopbar,
} from "types/single-types/sps-lite";

export interface ISpsLitePublicPage {
  meta?: ISpsLiteBackendMeta | null;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  publicPageTopbar?: ISpsLiteBackendPublicPageTopbar;
  publicPageNavbar: ISpsLiteBackendPublicPageNavbar;
  publicPageFooter: ISpsLiteBackendPublicPageFooter;
  publicPageLayout: ISpsLiteBackendPublicPageLayout;
}

export interface ISpsLiteMainPage extends ISpsLitePublicPage {}

export interface ISpsLiteNotFoundPage extends ISpsLitePublicPage {}
