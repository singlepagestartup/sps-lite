import { populate as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/models/feature/backend/schema/relations/features-section-blocks-to-features";

export const populate = (params: any) => {
  return {
    featuresSectionBlocksToFeatures: featuresSectionBlocksToFeatures(params),
  } as const;
};
