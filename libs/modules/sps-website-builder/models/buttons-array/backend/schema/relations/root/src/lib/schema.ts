import { relation as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-hero-section-blocks-to-buttons-arrays";
import { relation as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-navbar-blocks-to-buttons-arrays";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-buttons-array-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...heroSectionBlocksToButtonsArrays(helpers),
    ...navbarBlocksToButtonsArrays(helpers),
  };
});
