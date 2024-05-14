import { relation as featuresSectionBlocks } from "@sps/sps-website-builder-models-feature-backend-schema-relations-features-section-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-feature-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...featuresSectionBlocks(helpers) };
});
