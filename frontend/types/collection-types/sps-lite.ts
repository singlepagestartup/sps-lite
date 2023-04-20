import {
  ISpsLiteBackendButton,
  ISpsLiteBackendFeature,
  ISpsLiteBackendInput,
  ISpsLiteBackendSlide,
} from "types/components/elements/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

export interface ISpsLiteBackendCurrency {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tiers?: ISpsLiteBackendTier;
}

export interface ISpsLiteBackendForm {
  id: number;
  variant: `simple`;
  title: string | null;
  inputs?: ISpsLiteBackendInput[];
  uid: string;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  additionalAttributes: any | null;
  button?: ISpsLiteBackendButton;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendModal {
  id: number;
  title: string | null;
  variant: `simple`;
  dialogPanelClassName: string | null;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendPage {
  id: number;
  title: string | null;
  url: string;
  locale: string;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  localizations: ISpsLiteBackendPage[] | null;
  layout?: ISpsLiteBackendLayout | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendReview {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendSlider {
  id: number;
  slides: ISpsLiteBackendSlide[];
  className: string | null;
  aspectRatioClassName: string | null;
  variant: `fade-with-previews`;
  showFullScreen: boolean | null;
  showBackdrop: boolean | null;
  showPreviews: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendTier {
  id: number;
  title: string | null;
  description: string | null;
  features?: ISpsLiteBackendFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: ISpsLiteBackendCurrency | null;
  type: `one-time` | `regularly`;
  buttons?: ISpsLiteBackendButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendSlideOver {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  position: `left` | `right`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendSidebar {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendMetatag {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  favicon?: ISpsLiteBackendUploadPluginBackendMedia | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendTopbar {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendNavbar {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendFlyoutMenu {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendFooter {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendLayout {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: `simple`;
  meta?: ISpsLiteBackendMetatag | null;
  topbar?: ISpsLiteBackendTopbar | null;
  navbar?: ISpsLiteBackendNavbar | null;
  sidebar?: ISpsLiteBackendSidebar | null;
  footer?: ISpsLiteBackendFooter | null;
  pages?: ISpsLiteBackendPage[] | null;
}

export interface ISpsLiteBackendLocale {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  isDefault: boolean;
}
