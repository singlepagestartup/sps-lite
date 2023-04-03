import { IPageBlock } from "types";
import {
  IBackendButton,
  IBackendFeature,
  IBackendInput,
  IBackendSlide,
} from "./elements";
import { IBackendMedia } from "./strapi";

export interface IBackendTier {
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

export interface IBackendModal {
  id: number;
  title: string | null;
  variant: keyof typeof variants;
  dialogPanelClassName: string | null;
  pageBlocks?: IPageBlock[] | null;
  uid: string;
}

export interface IBackendForm {
  id: number;
  title: string | null;
  inputs?: IBackendInput[];
  subtitle: string | null;
  description: string | null;
  button?: IBackendButton;
}

export interface IBackendReview {
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

export interface IBackendSlider {
  slides: IBackendSlide[];
  className: string | null;
  aspectRatioClassName: string | null;
  variant: `fade-with-previews`;
  showFullScreen: boolean | null;
  showBackdrop: boolean | null;
  showPreviews: boolean | null;
}

export interface IBackendCurrency {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
}
