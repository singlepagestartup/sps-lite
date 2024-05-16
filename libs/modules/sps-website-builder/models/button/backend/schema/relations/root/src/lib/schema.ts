import { relation as heroSectionBlocksToButtons } from "@sps/sps-website-builder-models-button-backend-schema-relations-hero-section-blocks-to-buttons";
import { relation as navbarBlocksToButtons } from "@sps/sps-website-builder-models-button-backend-schema-relations-navbar-blocks-to-buttons";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-button-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...heroSectionBlocksToButtons(helpers),
    ...navbarBlocksToButtons(helpers),
  };
});
