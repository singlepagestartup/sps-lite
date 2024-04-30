import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { PagesToLayoutsTable } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";

export const Relations = relations(Table, (helpers) => {
  return {
    PagesToLayouts: helpers.many(PagesToLayoutsTable),
  };
});
