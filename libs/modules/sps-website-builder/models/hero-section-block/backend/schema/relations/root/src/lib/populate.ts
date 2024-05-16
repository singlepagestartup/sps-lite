import { populate as heroSectionBlocksToFiles } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-hero-section-blocks-to-files";
import { populate as heroSectionBlocksToButtons } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-hero-section-blocks-to-buttons";
import { populate as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-widgets-to-hero-section-blocks";
export const populate = {
  ...heroSectionBlocksToFiles,
  ...heroSectionBlocksToButtons,
  ...widgetsToHeroSectionBlocks,
};
