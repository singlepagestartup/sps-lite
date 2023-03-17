import { Dispatch, SetStateAction } from "react";
import { IFooter } from "~components/page-blocks/footers";
import { ITopbar } from "~components/topbar";

export interface IMeta {
  title?: string;
  description?: string;
  favicon?: IMedia;
  image?: IMedia;
  domain?: string;
  gtmKey?: string;
  script?: string;
}

export interface IPageBlock {
  _Component: `page-blocks.header` | `page-blocks.hero-block`;
}

export interface IButton {
  title: string;
  url: string;
  description?: string;
  icon?: IMedia;
  variant: `bottom-line`;
}

export interface IModal extends IPageBlocksProps {
  id: number;
  title: string;
  variant: `simple`;
  dialogPanelClassName: string;
  uid: string;
}

export interface IFaq {
  title: string;
  description: string;
}

export interface ILogo {
  logo: IMedia;
  logoMonochrome: IMedia;
  url: string;
}

export interface IForm {
  title: string;
  inputs: {
    label: string;
    placeholder: string;
    isRequired: boolean;
    type: `text` | `text-area` | `date`;
  }[];
  subtitle?: string;
  description?: string;
  button?: IButton;
}

export interface ISlide {
  buttons?: IButton[];
  title?: string;
  subtitle?: string;
  description?: string;
  media: IMedia;
}


export interface ISlider {
  variant: `fade-with-previews`;
  showBackdrop?: boolean;
  showFullScreen?: boolean;
  aspectRatioClassName?: string;
  slides: ISlide[];
}

export interface IFeature {
  title: string;
  description: string;
  subtitle: string;
  media: IMedia[];
  icon: IMedia;
}

export interface IButtons extends IButton {
  _Component:
    | `elements.button`
    | `elements.buttons-array`
    | `elements.flyout-menu`;
}

export interface IHeader {
  topbar?: ITopbar;
  logo: IMedia;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  position: string;
  variant: `simple-links-on-left`;
}

export interface IPageBlocksProps {
  pageBlocks: IPageBlock[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface IButtonsArray {
  title: string;
  buttons: IButtons[];
  description?: string;
  className: string;
  variant: `column`;
}

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

export interface IPublicPageLayout {
  id: number;
  variant: `simple`;
}

export interface IPageProps extends IPageBlocksProps {
  header: IHeader;
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
  alternativeText: string;
}

export interface IAddress {
  address: string;
  apartment: string;
  comment: string;
  id: number;
  postalCode: string;
  country: string;
  city?: string;
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

export interface IProductAttributeKey {
  id: number;
  key: string;
  title: string;
}

export interface IProductAttribute {
  id: number;
  boolean?: boolean;
  number?: number;
  string?: string;
  key: IProductAttributeKey;
  createdAt: string;
  updatedAt: string;
  isAvailable?: boolean;
}

export interface IProductVariant {
  id: number;
  attributes: IProductAttribute[];
  price: number;
  media: IMedia[];
}

export interface IProduct {
  id: number;
  title: string;
  uid: string;
  price: number;
  description: string;
  media: IMedia[];
  score: number;
  category: ICategory | number;
  currency: ICurrency;
  attributes: IProductAttribute[];
  fullDescription: string;
  reviews: IReview[];
  variants: IProductVariant[];
  createdAt: string;
  updatedAt: string;
  pageBlocks?: any;
}

export interface IReview {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  rating: number;
  description: string;
  cover: IMedia;
  createdAt: string;
}

export {};

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }
}
