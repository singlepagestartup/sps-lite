import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { relation as layoutsRelation } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";

export const Relations = relations(Table, (helpers) => {
  return {
    ...layoutsRelation(helpers),
  };
});
