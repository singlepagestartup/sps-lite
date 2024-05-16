import { relation as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-features-section-blocks-to-features";
import { relation as widgetsToFeaturesSectionBlocks } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-widgets-to-features-section-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...featuresSectionBlocksToFeatures(helpers),
    ...widgetsToFeaturesSectionBlocks(helpers),
  };
});
