import { Dispatch, SetStateAction } from "react";
import { IButton } from "~components/buttons/simple-buttons";
import { IPageBlocksComponent } from "~components/layout/page-blocks";
import { IPublicPageLayout } from "~components/layout/public-page-layouts";
import { IFooter } from "~components/page-blocks/footers";
import { ITopbar } from "~components/page-blocks/topbar";
import { IBackendNavbar } from "./models";

export interface IDashboardLayout {
  id: number;
  locale: string;
  publishedAt: string;
  variant: `simple`;
  sidebarBlocks: IButtons[];
}

export interface IAuthLayout {
  id: number;
  variant: `simple`;
}

export interface IPageProps extends IPageBlocksComponent {
  navbar: IBackendNavbar;
  meta: IMeta;
  footer: IFooter;
  shoppingCart: any;
  products?: IProduct[];
  tabs?: any[];
  product?: IProduct;
  dashboardLayout?: IDashboardLayout;
  authLayout?: IAuthLayout;
  publicPageLayout?: IPublicPageLayout;
}

export interface IMedia {
  id: number;
  url: string;
  mime: string;
  alternativeText: string | null;
  name: string;
  caption: string | null;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: `.svg` | `.jpg`;
  mime: string;
  size: number;
  previewUrl: string | null;
  provider: `local` | `aws-s3`;
  providerMetadata?: any;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUser {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  isEmailConfirmationEnabled?: boolean;
  isOtpConfirmationEnabled?: boolean;
  isPhoneConfirmationEnabled?: boolean;
  name: string;
  nextAuthFactorKey?: string;
  patronymic: string;
  phone: string;
  provider: string;
  surname: string;
  updatedAt: string;
  username: string;
  addresses: IAddress[] | [];
}
export interface ICategory {
  createdAt: string;
  description: string;
  fullDescription: string;
  id: number;
  locale: string;
  media: IMedia[];
  publishedAt: string;
  title: string;
  uid: string;
  updatedAt: string;
  products: IProduct[];
}

export interface ICurrency {
  id: number;
  title: string;
  unicode: string;
  isDefault: boolean;
  products?: IProduct;
}

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
