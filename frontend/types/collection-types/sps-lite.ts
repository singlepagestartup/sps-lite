import {
  IBackendButton,
  IBackendFeature,
  IBackendInput,
  IBackendSlide,
} from "types/components/elements";
import { IBackendPageBlock } from "types/components/page-blocks";
import { IBackendMedia } from "types/plugins/upload";
import { IBackendCurrency } from ".";

export interface ISpsLiteBackendTier {
  id: number;
  title: string | null;
  description: string | null;
  features?: IBackendFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: IBackendCurrency | null;
  type: `one-time` | `regularly`;
  buttons?: IBackendButton[] | null;
}

export interface ISpsLiteBackendModal {
  id: number;
  title: string | null;
  variant: `simple`;
  dialogPanelClassName: string | null;
  pageBlocks?: IBackendPageBlock[] | null;
  uid: string;
}

export interface ISpsLiteBackendForm {
  id: number;
  title: string | null;
  inputs?: IBackendInput[];
  subtitle: string | null;
  description: string | null;
  button?: IBackendButton;
}

export interface ISpsLiteBackendReview {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  additionalMedia?: IBackendMedia[] | null;
  createdAt: string;
}

export interface ISpsLiteBackendSlider {
  slides: IBackendSlide[];
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
