import { IPublicPageLayout } from "~components/layouts/public-page-layouts";
import { IFooter } from "~components/footers/public-page-footers";
import { IBackendMeta } from "~components/meta";
import { ITopbar } from "~components/topbars/public-page-topbar";
import { pageBlockComponents } from "~utils/api/components";
import { IBackendPublicPageNavbar, IBackendTopbar } from "./models";

export interface IPageBlock {
  _Component: keyof typeof pageBlockComponents;
  [key: string]: any;
}

export interface IPage {
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  meta: IBackendMeta;
  pageBlocks: IPageBlock[];
}

export interface IPublicPage extends IPage {
  publicPageTopbar?: IBackendTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IFooter;
  publicPageLayout: IPublicPageLayout;
}

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
