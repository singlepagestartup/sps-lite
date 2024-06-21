import { populate as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/models/feature/backend/schema/relations/features-to-sps-file-storage-module-files";
import { populate as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/models/feature/backend/schema/relations/features-section-blocks-to-features";

export const populate = (params: any) => {
  return {
    featuresToSpsFileStorageModuleFiles:
      featuresToSpsFileStorageModuleFiles(params),
    featuresSectionBlocksToFeatures: featuresSectionBlocksToFeatures(params),
  } as const;
};
