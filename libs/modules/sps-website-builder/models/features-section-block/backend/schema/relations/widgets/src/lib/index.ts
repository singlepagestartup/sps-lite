import {
  Table,
  modelName,
  populate as parentPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-features-section-blocks-backend-schema";
import {
  Table as RightTable,
  modelName as rightTableModelName,
} from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "widgets",
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
      queryKey: "widget",
      schemaKey: "widgetId",
      extract: true,
      returnType: RightTable.$inferSelect,
    },
  ],
};

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(config.leftTable.table),
  };
};

export const populate = {
  [modelName]: {
    with: parentPopulate,
  },
};
