import { relations } from "drizzle-orm";
import { Table as ParentTable } from "@sps/sps-website-builder-models-page-backend-schema-plain";
import { Tables as SpsWebsiteBuilderTables } from "@sps/sps-website-builder-backend-schema-extended";

export const Relations = relations(ParentTable, (helpers) => {
  return {
    PageToLayoutRelation: helpers.many(
      SpsWebsiteBuilderTables.PageToLayoutTable,
    ),
  };
});
