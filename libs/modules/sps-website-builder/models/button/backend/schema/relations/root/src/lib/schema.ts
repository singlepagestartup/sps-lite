import { relation as heroSectionBlocks } from "@sps/sps-website-builder-models-button-backend-schema-relations-hero-section-blocks";
import { relation as navbarBlocks } from "@sps/sps-website-builder-models-button-backend-schema-relations-navbar-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-button-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...heroSectionBlocks(helpers), ...navbarBlocks(helpers) };
});
