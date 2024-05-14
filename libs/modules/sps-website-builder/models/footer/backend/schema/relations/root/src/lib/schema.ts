import { relation as widgets } from "@sps/sps-website-builder-models-footer-backend-schema-relations-widgets";
import { relation as layouts } from "@sps/sps-website-builder-models-footer-backend-schema-relations-layouts";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-footer-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgets(helpers), ...layouts(helpers) };
});