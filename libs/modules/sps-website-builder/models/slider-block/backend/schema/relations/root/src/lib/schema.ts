import { relation as widgets } from "@sps/sps-website-builder-models-slider-block-backend-schema-relations-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slider-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgets(helpers) };
});
