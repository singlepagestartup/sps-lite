import { IBackendPageBlock } from "types/components/page-blocks/sps-lite";
import {
  IBackendMeta,
  IBackendPublicPageFooter,
  IBackendPublicPageLayout,
  IBackendPublicPageNavbar,
  IBackendPublicPageTopbar,
} from "types/single-types/sps-lite";

export interface ISpsLitePublicPage {
  meta?: IBackendMeta | null;
  pageBlocks?: IBackendPageBlock[] | null;
  publicPageTopbar?: IBackendPublicPageTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IBackendPublicPageFooter;
  publicPageLayout: IBackendPublicPageLayout;
}
