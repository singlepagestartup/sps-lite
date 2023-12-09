import {
  ISpsLiteBackendButton,
  ISpsLiteBackendFeature,
  ISpsLiteBackendInput,
  ISpsLiteBackendSlide,
} from "types/components/elements/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";
import { ISpsLiteBackendCurrency } from "~redux/services/backend/models/currency/interfaces/sps-lite";
import { ISpsLiteBackendLayout } from "~redux/services/backend/models/layout/interfaces/sps-lite";

export interface ISpsLiteBackendForm {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  inputs?: Omit<ISpsLiteBackendInput, "__component">[];
  className: string | null;
  additionalAttributes: any | null;
  button?: Omit<ISpsLiteBackendButton, "__component">;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ISpsLiteBackendSlider {
  id: number;
  slides: ISpsLiteBackendSlide[];
  className: string | null;
  aspectRatioClassName: string | null;
  variant: "fade-with-previews";
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
  type: "one-time" | "regularly";
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
  variant: "right-side-half-width";
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
  variant: "one-quarter";
  side: "left" | "right";
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
  variant: "boxed";
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendFlyout {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "simple";
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}

export interface ISpsLiteBackendLocale {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  isDefault: boolean;
}
