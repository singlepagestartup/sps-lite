import {
  IBackendForm,
  IBackendReview,
  IBackendSlider,
  IBackendTier,
} from "types/collection-types";
import {
  IBackendButton,
  IBackendButtonsArray,
  IBackendFaq,
  IBackendFeature,
  IBackendLogotype,
} from "types/components/elements";
import { IBackendMedia } from "types/plugins/upload";
import { pageBlockComponents } from "~utils/api/components";

export interface ISpsLiteBackendPageBlock {
  id: number;
  _Component: keyof typeof pageBlockComponents;
  [key: string]: any;
}

export interface ISpsLiteBackendContactSectonBlock {
  id: number;
  variant: `split-brand-panel`;
  title: string | null;
  description: string | null;
  media?: IBackendMedia | null;
  form?: IBackendForm | null;
  buttonsArrays?: IBackendButtonsArray[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendCtaSectionBlock {
  id: number;
  title?: string;
  description?: string;
  media?: IBackendMedia[];
  variant: `simple-centered` | `dark-panel-with-app-screenshot`;
  anchor?: string;
  buttons?: IBackendButton[];
}

export interface ISpsLiteBackendFaqBlock {
  id: number;
  variant:
    | `centered-accordion`
    | `offset-with-supporting-text`
    | `centered-accordion-on-dark`
    | `side-by-side`
    | `three-columns`
    | `three-columns-on-dark`
    | `three-columns-with-centered-introduction`
    | `two-columns`
    | `two-columns-on-dark`
    | `two-columns-with-centered-introduction`;
  title: string | null;
  description: string | null;
  faqs?: IBackendFaq[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendFeaturesSectionBlock {
  id: number;
  features?: IBackendFeature[] | null;
  _Component: `page-blocks.features-section-block`;
  variant:
    | `simple-three-column`
    | `with-product-screenshot-on-left`
    | `three-column-with-slider`;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  media?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendFormBlock {
  id: number;
  variant: `simple`;
  form?: IBackendForm | null;
  className: string | null;
  anchor: string | null;
}

export interface ISpsLiteBackendHeaderSectionBlock {
  id: number;
  title: string | null;
  description: string | null;
  variant:
    | `simple-centered`
    | `simple-with-select-menu-dark`
    | `simple-with-select-menu`
    | `branded-with-background-image`
    | `with-background-image-and-overlapping-cards`;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendHeroSectionBlock {
  id: number;
  variant:
    | `split`
    | `simple-centered`
    | `split-with-screenshot-on-dark`
    | `with-app-screenshot`
    | `with-angled-image-on-right`;
  title: string | null;
  description: string | null;
  buttons?: IBackendButton[] | null;
  media?: IBackendMedia[] | null;
  anchor: string | null;
  background?: IBackendMedia | null;
}

export interface ISpsLiteBackendIncentivesBlock {
  id: number;
  features?: IBackendFeature[] | null;
  title: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  variant:
    | `four-column-with-illustrations`
    | `three-column-with-illustrations-and-split-header`
    | `three-column-with-illustrations-and-heading`
    | `three-column-with-illustrations-and-header`
    | `three-column-with-illustrations-and-centered-text`
    | `three-column-with-icons`
    | `three-column-with-icons-and-supporting-text`
    | `two-x-two-grid-with-illustrations`;
  anchor: string | null;
}

export interface ISpsLiteBackendLogotypesCloudBlock {
  id: number;
  variant:
    | `simple`
    | `simple-with-heading`
    | `simple-with-heading-on-brang`
    | `off-white-grid`
    | `split-with-grid-on-right`;
  title: string | null;
  logotypes?: IBackendLogotype[] | null;
  buttons?: IBackendButton[] | null;
  description: string | null;
  anchor: string | null;
}

export interface ISpsLiteBackendNotFoundBlock {
  id: number;
  variant: `simple`;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  buttons?: IBackendButton[] | null;
}

export interface ISpsLiteBackendPricingsBlock {
  id: number;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  background?: IBackendMedia;
  variant: `two-tiers-with-extra-tier`;
  anchor?: string;
  tiers?: IBackendTier[] | null;
  className: string | null;
}

export interface ISpsLiteBackendReviewsBlock {
  id: number;
  variant: `simple-with-avatars`;
  reviews?: IBackendReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}

export interface ISpsLiteBackendReviewsTableBlock {
  id: number;
  variant: `simple`;
}

export interface ISpsLiteBackendSliderBlock {
  id: number;
  variant: `simple`;
  anchor: string | null;
  slider?: IBackendSlider | null;
}
