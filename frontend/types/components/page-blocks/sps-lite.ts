import {
  ISpsLiteBackendForm,
  ISpsLiteBackendReview,
  ISpsLiteBackendSlider,
  ISpsLiteBackendTier,
} from "types/collection-types/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";
import { pageBlockComponents } from "~utils/api/components";
import {
  ISpsLiteBackendButton,
  ISpsLiteBackendButtonsArray,
  ISpsLiteBackendFaq,
  ISpsLiteBackendFeature,
  ISpsLiteBackendLogotype,
} from "../elements/sps-lite";

export interface ISpsLiteBackendPageBlock {
  id: number;
  __component: keyof typeof pageBlockComponents;
  [key: string]: any;
}

export interface ISpsLiteBackendContactSectonBlock {
  id: number;
  __component: "page-blocks.contact-section-block";
  variant: "centered";
  title: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia | null;
  form?: ISpsLiteBackendForm | null;
  buttonsArrays?: ISpsLiteBackendButtonsArray[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendCtaSectionBlock {
  id: number;
  __component: "page-blocks.cta-section-block";
  variant: "dark-panel-with-app-screenshot";
  title?: string;
  description?: string;
  media?: ISpsLiteBackendUploadPluginBackendMedia[];
  anchor?: string;
  buttons?: ISpsLiteBackendButton[];
}

export interface ISpsLiteBackendFaqBlock {
  id: number;
  __component: "page-blocks.faqs-block";
  variant: "two-columns-with-centered-introduction";
  title: string | null;
  description: string | null;
  faqs?: ISpsLiteBackendFaq[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendFeaturesSectionBlock {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: ISpsLiteBackendFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}

export interface ISpsLiteBackendHeaderSectionBlock {
  id: number;
  __component: "page-blocks.header-section-block";
  variant: "simple-centered";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendHeroSectionBlock {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: "simple-centered";
  title: string | null;
  description: string | null;
  buttons?: ISpsLiteBackendButton[] | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  anchor: string | null;
  background?: ISpsLiteBackendUploadPluginBackendMedia | null;
}

export interface ISpsLiteBackendIncentivesBlock {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: "four-column-with-illustrations";
  features?: ISpsLiteBackendFeature[] | null;
  title: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  anchor: string | null;
}

export interface ISpsLiteBackendLogotypesCloudBlock {
  id: number;
  __component: "page-blocks.logotypes-cloud-block";
  variant: "simple-with-heading";
  title: string | null;
  subtitle: string | null;
  logotypes?: ISpsLiteBackendLogotype[] | null;
  buttons?: ISpsLiteBackendButton[] | null;
  description: string | null;
  anchor: string | null;
}

export interface ISpsLiteBackendNotFoundBlock {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  buttons?: ISpsLiteBackendButton[] | null;
}

export interface ISpsLiteBackendPricingsBlock {
  id: number;
  __component: "page-blocks.pricing-block";
  variant: "two-columns";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  background?: ISpsLiteBackendUploadPluginBackendMedia;
  tiers?: ISpsLiteBackendTier[] | null;
  className: string | null;
}

export interface ISpsLiteBackendReviewsBlock {
  id: number;
  __component: "page-blocks.reviews-block";
  variant: "simple-with-avatars";
  reviews?: ISpsLiteBackendReview[] | null;
  showAll: boolean | null;
  anchor: string | null;
}

export interface ISpsLiteBackendReviewsTableBlock {
  id: number;
  anchor: string | null;
  __component: "page-blocks.reviews-table-block";
  variant: "simple";
}

export interface ISpsLiteBackendSliderBlock {
  id: number;
  __component: "page-blocks.slider-block";
  variant: "simple";
  anchor: string | null;
  slider?: ISpsLiteBackendSlider | null;
}

export interface ISpsLiteBackendNavbarBlock {
  id: number;
  __component: "page-blocks.navbar-block";
  variant: "simple-links-on-left";
  className: string | null;
  description: string | null;
  logotype: ISpsLiteBackendLogotype | null;
  buttons: ISpsLiteBackendButton[] | null;
  additionalButtons: ISpsLiteBackendButton[] | null;
}

export interface ISpsLiteBackendFooterBlock {
  id: number;
  __component: "page-blocks.footer-block";
  variant: "four-columns-with-company-mission";
  className: string | null;
  copyrights: string | null;
  description: string | null;
  logotype: ISpsLiteBackendLogotype | null;
  buttonsArrays: ISpsLiteBackendButtonsArray[] | null;
  additionalButtonsArrays: ISpsLiteBackendButtonsArray[] | null;
  extraButtonsArrays: ISpsLiteBackendButtonsArray[] | null;
}
