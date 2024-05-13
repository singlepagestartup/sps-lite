import { relation as buttons } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-buttons";
import { relation as widgets } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...buttons(helpers), ...widgets(helpers) };
});
