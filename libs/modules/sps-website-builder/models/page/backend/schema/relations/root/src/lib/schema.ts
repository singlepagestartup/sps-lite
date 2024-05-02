import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  relation as layoutsRelation,
  config as layoutsRelationConfig,
} from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";

export const Relations = relations(Table, (helpers) => {
  return {
    ...layoutsRelation(helpers),
  };
});

export const config = {
  [layoutsRelationConfig.name]: layoutsRelationConfig,
};
