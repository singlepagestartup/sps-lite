import {
  ISpsLiteBackendContactSectonBlock,
  ISpsLiteBackendCtaSectionBlock,
  ISpsLiteBackendFaqBlock,
  ISpsLiteBackendFeaturesSectionBlock,
  ISpsLiteBackendHeaderSectionBlock,
  ISpsLiteBackendHeroSectionBlock,
  ISpsLiteBackendIncentivesBlock,
  ISpsLiteBackendLogotypesCloudBlock,
  ISpsLiteBackendNotFoundBlock,
  ISpsLiteBackendPageBlock,
  ISpsLiteBackendPricingsBlock,
  ISpsLiteBackendReviewsBlock,
  ISpsLiteBackendReviewsTableBlock,
  ISpsLiteBackendSliderBlock,
} from "./sps-lite";
import { ISpsBackendHeroSectionBlock } from "./sps";

export interface IBackendPageBlock extends ISpsLiteBackendPageBlock {}

export interface IBackendContactSectonBlock
  extends ISpsLiteBackendContactSectonBlock {}

export interface IBackendCtaSectionBlock
  extends ISpsLiteBackendCtaSectionBlock {}

export interface IBackendFaqBlock extends ISpsLiteBackendFaqBlock {}

export interface IBackendFeaturesSectionBlock
  extends ISpsLiteBackendFeaturesSectionBlock {}

export interface IBackendHeaderSectionBlock
  extends ISpsLiteBackendHeaderSectionBlock {}

export interface IBackendIncentivesBlock
  extends ISpsLiteBackendIncentivesBlock {}

export interface IBackendLogotypesCloudBlock
  extends ISpsLiteBackendLogotypesCloudBlock {}

export interface IBackendNotFoundBlock extends ISpsLiteBackendNotFoundBlock {}

export interface IBackendPricingsBlock extends ISpsLiteBackendPricingsBlock {}

export interface IBackendReviewsBlock extends ISpsLiteBackendReviewsBlock {}

export interface IBackendReviewsTableBlock
  extends ISpsLiteBackendReviewsTableBlock {}

export interface IBackendSliderBlock extends ISpsLiteBackendSliderBlock {}
