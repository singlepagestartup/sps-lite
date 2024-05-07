import {
  Table,
  modelName,
  populate as parentPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import {
  Table as RightTable,
  modelName as rightTableModelName,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "pages",
  type: "many" as const,
  model: modelName,
  leftTable: {
    model: modelName,
    table: Table,
    queryKey: "layout",
    schemaKey: "layoutId",
  },
  rightTables: [
    {
      model: rightTableModelName,
      table: RightTable,
      queryKey: "page",
      schemaKey: "layoutId",
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
