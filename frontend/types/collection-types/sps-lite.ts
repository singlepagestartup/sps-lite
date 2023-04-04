import {
  ISpsLiteBackendButton,
  ISpsLiteBackendFeature,
  ISpsLiteBackendInput,
  ISpsLiteBackendSlide,
} from "types/components/elements/sps-lite";
import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

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
}

export interface ISpsLiteBackendModal {
  id: number;
  title: string | null;
  variant: `simple`;
  dialogPanelClassName: string | null;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  uid: string;
}

export interface ISpsLiteBackendForm {
  id: number;
  variant: `simple`;
  title: string | null;
  inputs?: ISpsLiteBackendInput[];
  subtitle: string | null;
  description: string | null;
  className: string | null;
  additionalAttributes: string | null;
  button?: ISpsLiteBackendButton;
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
}

export interface ISpsLiteBackendSlider {
  slides: ISpsLiteBackendSlide[];
  className: string | null;
  aspectRatioClassName: string | null;
  variant: `fade-with-previews`;
  showFullScreen: boolean | null;
  showBackdrop: boolean | null;
  showPreviews: boolean | null;
}

export interface ISpsLiteBackendCurrency {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
}
