import { IBackendPageBlock } from "types/components/page-blocks";
import {
  IBackendMeta,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types";

export interface ISpsLitePublicPage {
  meta?: IBackendMeta | null;
  pageBlocks?: IBackendPageBlock[] | null;
  publicPageTopbar?: IBackendPublicPageTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IBackendPublicPageFooter;
  publicPageLayout: IBackendPublicPageLayout;
}
