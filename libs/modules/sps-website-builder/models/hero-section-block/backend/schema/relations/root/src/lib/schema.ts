import { relation as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-hero-section-blocks-to-buttons-arrays";

import { relation as widgetsToHeroSectionBlocks } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-relations-widgets-to-hero-section-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...heroSectionBlocksToButtonsArrays(helpers),
    ...widgetsToHeroSectionBlocks(helpers),
  };
});
