import {
  Table,
  modelName,
  populate as parentPopulate,
} from "@sps/sps-website-builder-relations-sliders-to-slides-backend-schema";
import {
  Table as RightTable,
  modelName as rightTableModelName,
} from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "slides",
  type: "many" as const,
  model: modelName,
  leftTable: {
    model: modelName,
    table: Table,
    queryKey: "slider",
    schemaKey: "sliderId",
  },
  rightTables: [
    {
      model: rightTableModelName,
      table: RightTable,
      queryKey: "slide",
      schemaKey: "slideId",
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
