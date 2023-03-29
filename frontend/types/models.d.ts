import { IButtons } from "~components/buttons";
import { IButtonsArray } from "~components/buttons/buttons-arrays";
import { IButton } from "~components/buttons/simple-buttons";
import { IBackendFeature, IBackendInput, IBackendSlide } from "./components";

export interface IBackendTier {
  id: number;
  title: string | null;
  description: string | null;
  features?: IBackendFeature[];
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  type: `one-time` | `regularly`;
}

export interface IBackendForm {
  id: number;
  title: string | null;
  inputs: IBackendInput[];
  subtitle: string | null;
  description: string | null;
  button?: IButton;
}

export interface IBackendReview {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  cover: IMedia | null;
  createdAt: string;
}

export interface IBackendSlider {
  slides: IBackendSlide[];
  className?: string;
  aspectRatioClassName?: string;
  variant: `fade-with-previews`;
  showFullScreen?: boolean;
  showBackdrop?: boolean;
  showPreviews?: boolean;
}

export interface IBackendFooter {
  id: number;
  logo: IMedia;
  socialNetworksButtons?: IButtonsArray[];
  buttonsArrays?: IButtonsArray[];
  policiesButtons?: IButtonsArray[];
  copyrights?: string;
  variant:
    | `four-columns-simple`
    | `four-columns-simple-dark`
    | `four-columns-with-company-mission`;
  privacyPolicy?: string[];
  description?: string;
  form?: IBackendForm;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale: string;
  _meta?: any;
}

export interface IBackendNavbar {
  logo: IMedia;
  buttons?: IButtons[];
  profileButtons?: IButtons[];
  additionalButtons?: IButtons[];
  ctaButtons?: IButtons[];
  className?: string | null;
  variant: `simple-links-on-left`;
}

export interface IBackendTopbar {
  title?: string | null;
  variant: `simple`;
  buttons?: IButton[];
}
