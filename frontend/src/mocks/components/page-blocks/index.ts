import {
  IBackendContactSectonBlock,
  IBackendCtaSectionBlock,
  IBackendFaqBlock,
  IBackendFeaturesSectionBlock,
  IBackendHeaderSectionBlock,
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
  spsLiteBackendIncentivesBlockFourColumnWithIllustrations,
  spsLiteBackendLogotypesCloudBlockSimpleWithHeading,
  spsLiteBackendNotFoundBlockSimple,
  spsLiteBackendPricingBlockSinglePriceWithDetails,
  spsLiteBackendReviewsBlockSimpleWithAvatars,
  spsLiteBackendReviewsTableBlockSimple,
  spsLiteBackendSliderBlockSimple,
} from "./sps-lite";
import { spsLiteUploadPluginBackendMediaLogotypeIcon } from "~mocks/plugins/upload/sps-lite";

export const backendFeatureSectionBlockWithProductScreenshot: IBackendFeaturesSectionBlock =
  {
    ...spsLiteBackendFeatureSectionBlockWithProductScreenshot,
  };

export const backendContactSectionBlockCentered: IBackendContactSectonBlock = {
  ...spsLiteBackendContactSectionBlockCentered,
};

export const backendCtaSectionBlockDarkPanelWithAppScreenshot: IBackendCtaSectionBlock =
  {
    ...spsLiteBackendCtaSectionBlockDarkPanelWithAppScreenshot,
  };

export const backendFaqBlockTwoColumnsWithCenteredIntroduction: IBackendFaqBlock =
  {
    ...spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction,
  };

export const backendHeaderSectionBlockSimpleCentered: IBackendHeaderSectionBlock =
  {
    ...spsLiteBackendHeaderSectionBlockSimpleCentered,
  };

export const backendIncentivesBlockFourColumnWithIllustrations: IBackendIncentivesBlock =
  {
    ...spsLiteBackendIncentivesBlockFourColumnWithIllustrations,
  };

export const backendLogotypesCloudBlockSimpleWithHeading: IBackendLogotypesCloudBlock =
  {
    ...spsLiteBackendLogotypesCloudBlockSimpleWithHeading,
  };

export const backendNotFoundBlockSimple: IBackendNotFoundBlock = {
  ...spsLiteBackendNotFoundBlockSimple,
};

export const backendPricingBlockSinglePriceWithDetails: IBackendPricingsBlock =
  {
    ...spsLiteBackendPricingBlockSinglePriceWithDetails,
  };

export const backendReviewsBlockSimpleWithAvatars: IBackendReviewsBlock = {
  ...spsLiteBackendReviewsBlockSimpleWithAvatars,
};

export const backendReviewsTableBlockSimple: IBackendReviewsTableBlock = {
  ...spsLiteBackendReviewsTableBlockSimple,
};

export const backendSliderBlockSimple: IBackendSliderBlock = {
  ...spsLiteBackendSliderBlockSimple,
};
