import { populate as heroSectionBlocksToSpsFileStorageWidgets } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-hero-section-blocks-to-sps-file-storage-module-widgets";
import { populate as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-hero-section-blocks-to-buttons-arrays";

import { populate as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-widgets-to-hero-section-blocks";

export const populate = (params: any) => {
  return {
    heroSectionBlocksToSpsFileStorageWidgets:
      heroSectionBlocksToSpsFileStorageWidgets(params),
    heroSectionBlocksToButtonsArrays: heroSectionBlocksToButtonsArrays(params),
    widgetsToHeroSectionBlocks: widgetsToHeroSectionBlocks(params),
  } as const;
};
