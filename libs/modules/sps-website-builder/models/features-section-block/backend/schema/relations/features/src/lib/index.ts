import {
  Table,
  modelName,
  populate as parentPopulate,
} from "@sps/sps-website-builder-relations-features-section-blocks-to-features-backend-schema";
import {
  Table as RightTable,
  modelName as rightTableModelName,
} from "@sps/sps-website-builder-models-feature-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "features",
  type: "many" as const,
  model: modelName,
  leftTable: {
    model: modelName,
    table: Table,
    queryKey: "featuresSectionBlock",
    schemaKey: "featuresSectionBlockId",
  },
  rightTables: [
    {
      model: rightTableModelName,
      table: RightTable,
      queryKey: "feature",
      schemaKey: "featureId",
      extract: true,
      returnType: RightTable.$inferSelect,
    },
  ],
};

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    features: helpers.many(config.leftTable.table),
  };
};

export const populate = {};
