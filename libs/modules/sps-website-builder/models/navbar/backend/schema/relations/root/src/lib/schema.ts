import { relation as layouts } from "@sps/sps-website-builder-models-navbar-backend-schema-relations-layouts";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-navbar-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...layouts(helpers) };
});
