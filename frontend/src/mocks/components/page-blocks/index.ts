import {
  IBackendContactSectonBlock,
  IBackendCtaSectionBlock,
  IBackendFaqBlock,
  IBackendFeaturesSectionBlock,
  IBackendHeaderSectionBlock,
  IBackendHeroSectionBlock,
  IBackendIncentivesBlock,
  IBackendLogotypesCloudBlock,
  IBackendNotFoundBlock,
  IBackendPricingsBlock,
  IBackendReviewsBlock,
  IBackendReviewsTableBlock,
  IBackendSliderBlock,
} from "types/components/page-blocks";
import {
  spsLiteBackendContactSectionBlockCentered,
  spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot,
  spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction,
  spsLiteBackendFeatureSectionBlockWithProductScreenshot,
  spsLiteBackendHeaderSectionBlockSimpleCentered,
  spsLiteBackendHeroSectionBlockSimpleCentered,
  spsLiteBackendIncentivesBlockFourColumnWithIllustrations,
  spsLiteBackendLogotypesCloudBlockSimpleWithHeading,
  spsLiteBackendNotFoundBlockSimple,
  spsLiteBackendPricingBlockSinglePriceWithDetails,
  spsLiteBackendReviewsBlockSimpleWithAvatars,
  spsLiteBackendReviewsTableBlockSimple,
  spsLiteBackendSliderBlockSimple,
} from "./sps-lite";

export const backendFeatureSectionBlockWithProductScreenshot = {
  ...spsLiteBackendFeatureSectionBlockWithProductScreenshot,
} as IBackendFeaturesSectionBlock;

export const backendContactSectionBlockCentered = {
  ...spsLiteBackendContactSectionBlockCentered,
} as IBackendContactSectonBlock;

export const backendCtaSectionBlockDarkPanelWithAppScreenshot = {
  ...spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot,
} as IBackendCtaSectionBlock;

export const backendFaqBlockTwoColumnsWithCenteredIntroduction = {
  ...spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction,
} as IBackendFaqBlock;

export const backendHeaderSectionBlockSimpleCentered = {
  ...spsLiteBackendHeaderSectionBlockSimpleCentered,
} as IBackendHeaderSectionBlock;

export const backendHeroSectionBlockSimpleCentered = {
  ...spsLiteBackendHeroSectionBlockSimpleCentered,
} as IBackendHeroSectionBlock;

export const backendIncentivesBlockFourColumnWithIllustrations = {
  ...spsLiteBackendIncentivesBlockFourColumnWithIllustrations,
} as IBackendIncentivesBlock;

export const backendLogotypesCloudBlockSimpleWithHeading = {
  ...spsLiteBackendLogotypesCloudBlockSimpleWithHeading,
} as IBackendLogotypesCloudBlock;

export const backendNotFoundBlockSimple = {
  ...spsLiteBackendNotFoundBlockSimple,
} as IBackendNotFoundBlock;

export const backendPricingBlockSinglePriceWithDetails = {
  ...spsLiteBackendPricingBlockSinglePriceWithDetails,
} as IBackendPricingsBlock;

export const backendReviewsBlockSimpleWithAvatars = {
  ...spsLiteBackendReviewsBlockSimpleWithAvatars,
} as IBackendReviewsBlock;

export const backendReviewsTableBlockSimple = {
  ...spsLiteBackendReviewsTableBlockSimple,
} as IBackendReviewsTableBlock;

export const backendSliderBlockSimple = {
  ...spsLiteBackendSliderBlockSimple,
} as IBackendSliderBlock;
