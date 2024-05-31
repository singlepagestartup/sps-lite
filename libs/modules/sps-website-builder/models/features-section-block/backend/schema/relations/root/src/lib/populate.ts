import { populate as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-features-section-blocks-to-features";
import { populate as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-widgets-to-features-section-blocks";

export const populate = (params: any) => {
  return {
    featuresSectionBlocksToFeatures: featuresSectionBlocksToFeatures(params),
    widgetsToFeaturesSectionBlocks: widgetsToFeaturesSectionBlocks(params),
  } as const;
};
