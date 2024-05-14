import {
  Table,
  modelName,
  populate as parentPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-backend-schema";
import {
  Table as RightTable,
  modelName as rightTableModelName,
} from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "features-section-blocks",
  type: "many" as const,
  model: modelName,
  leftTable: {
    model: modelName,
    table: Table,
    queryKey: "widget",
    schemaKey: "widgetId",
  },
  rightTables: [
    {
      model: rightTableModelName,
      table: RightTable,
      queryKey: "featuresSectionBlock",
      schemaKey: "featuresSectionBlockId",
      extract: true,
      returnType: RightTable.$inferSelect,
    },
  ],
};

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(Table),
  };
};

export const populate = {
  [modelName]: {
    with: parentPopulate,
  },
};
