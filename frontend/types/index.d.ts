import { IPublicPageLayout } from "~components/layouts/public-page-layouts";
import { IBackendMeta } from "~components/meta";
import { ITopbar } from "~components/topbars/public-page-topbar";
import { pageBlockComponents } from "~utils/api/components";
import {
  IBackendPublicPageFooter,
  IBackendPublicPageNavbar,
  IBackendTopbar,
} from "./single-types";

export interface IBackendPageBlock {
  id: number;
  _Component: keyof typeof pageBlockComponents;
  [key: string]: any;
}

export interface IBackendPage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  meta?: IBackendMeta | null;
  pageBlocks?: IPageBlock[] | null;
}

export interface IBackendPublicPage extends IBackendPage {
  publicPageTopbar?: IBackendTopbar;
  publicPageNavbar: IBackendPublicPageNavbar;
  publicPageFooter: IBackendPublicPageFooter;
  publicPageLayout: IPublicPageLayout;
}

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
