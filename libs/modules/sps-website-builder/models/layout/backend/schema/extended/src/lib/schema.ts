import { relations } from "drizzle-orm";
import { Table as ParentTable } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { PagesToLayoutsTable } from "@sps/sps-website-builder-backend-schema-extended";

export const Relations = relations(ParentTable, (helpers) => {
  return {
    PagesToLayouts: helpers.many(PagesToLayoutsTable),
  };
});
