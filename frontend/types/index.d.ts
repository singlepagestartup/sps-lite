import { IPublicPageLayout } from "~components/layout/public-page-layouts";
import { IFooter } from "~components/page-blocks/footers";
import { IMeta } from "~components/page-blocks/meta";
import { ITopbar } from "~components/page-blocks/topbar";
import { pageBlockComponents } from "~utils/api/components";
import { IBackendNavbar, IBackendTopbar } from "./models";

export interface IPageBlock {
  _Component: keyof typeof pageBlockComponents;
}

export interface IPage {
  topbar: IBackendTopbar;
  navbar: IBackendNavbar;
  meta: IMeta;
  footer: IFooter;
  publicPageLayout?: IPublicPageLayout;
  pageBlocks: IPageBlock[];
}

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
