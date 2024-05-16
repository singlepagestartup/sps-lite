import { relation as pagesToWidgets } from "@sps/sps-website-builder-models-page-backend-schema-relations-pages-to-widgets";
import { relation as pagesToLayouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-pages-to-layouts";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...pagesToWidgets(helpers), ...pagesToLayouts(helpers) };
});
