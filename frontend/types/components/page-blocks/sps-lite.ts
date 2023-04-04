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
  __component: keyof typeof pageBlockComponents;
  [key: string]: any;
}

export interface ISpsLiteBackendContactSectonBlock {
  id: number;
  __component: `page-blocks.contact-section-block`;
  variant: `centered`;
  title: string | null;
  description: string | null;
  media?: IBackendMedia | null;
  form?: IBackendForm | null;
  buttonsArrays?: IBackendButtonsArray[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendCtaSectionBlock {
  id: number;
  __component: `page-blocks.cta-section-block`;
  variant: `dark-panel-with-app-screenshot`;
  title?: string;
  description?: string;
  media?: IBackendMedia[];
  anchor?: string;
  buttons?: IBackendButton[];
}

export interface ISpsLiteBackendFaqBlock {
  id: number;
  __component: `page-blocks.faqs-block`;
  variant: `two-columns-with-centered-introduction`;
  title: string | null;
  description: string | null;
  faqs?: IBackendFaq[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendFeaturesSectionBlock {
  id: number;
  __component: `page-blocks.features-section-block`;
  variant: `with-product-screenshot` | `centered-two-x-two-grid`;
  features?: IBackendFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  media?: IBackendMedia[] | null;
}

export interface ISpsLiteBackendFormBlock {
  id: number;
  __component: `page-blocks.form-block`;
  variant: `simple`;
  form?: IBackendForm | null;
  className: string | null;
  anchor: string | null;
}

export interface ISpsLiteBackendHeaderSectionBlock {
  id: number;
  __component: `page-blocks.header-section-block`;
  variant: `simple-centered`;
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendMedia[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendHeroSectionBlock {
  id: number;
  __component: `page-blocks.hero-section-block`;
  variant: `simple-centered`;
  title: string | null;
  description: string | null;
  buttons?: IBackendButton[] | null;
  media?: IBackendMedia[] | null;
  anchor: string | null;
  background?: IBackendMedia | null;
}

export interface ISpsLiteBackendIncentivesBlock {
  id: number;
  __component: `page-blocks.incentives-block`;
  variant: `four-column-with-illustrations`;
  features?: IBackendFeature[] | null;
  title: string | null;
  description: string | null;
  media?: IBackendMedia[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendLogotypesCloudBlock {
  id: number;
  __component: `page-blocks.logotypes-cloud-block`;
  variant: `simple-with-heading`;
  title: string | null;
  logotypes?: IBackendLogotype[] | null;
  buttons?: IBackendButton[] | null;
  description: string | null;
  anchor: string | null;
}

export interface ISpsLiteBackendNotFoundBlock {
  id: number;
  __component: `page-blocks.not-found-block`;
  variant: `simple`;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  buttons?: IBackendButton[] | null;
}

export interface ISpsLiteBackendPricingsBlock {
  id: number;
  __component: `page-blocks.pricing-block`;
  variant: `single-price-with-details`;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  background?: IBackendMedia;
  anchor?: string;
  tiers?: IBackendTier[] | null;
  className: string | null;
}

export interface ISpsLiteBackendReviewsBlock {
  id: number;
  __component: `page-blocks.reviews-block`;
  variant: `simple-with-avatars`;
  reviews?: IBackendReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}

export interface ISpsLiteBackendReviewsTableBlock {
  id: number;
  __component: `page-blocks.reviews-table-block`;
  variant: `simple`;
}

export interface ISpsLiteBackendSliderBlock {
  id: number;
  __component: `page-blocks.slider-block`;
  variant: `simple`;
  anchor: string | null;
  slider?: IBackendSlider | null;
}
