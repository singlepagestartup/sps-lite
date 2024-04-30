import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { relation as pagesRelation } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";

export const Relations = relations(Table, (helpers) => {
  return {
    ...pagesRelation(helpers),
  };
});
