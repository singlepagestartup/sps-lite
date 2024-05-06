import {
  Table,
  model,
  populate as parentPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";
import {
  Table as RightTable,
  model as rightTableModel,
} from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export type RelationConfig = {
  name: string;
  type: "many";
  model: string;
  leftTable: {
    model: string;
    table: typeof Table;
    key: string;
  };
  rightTables: {
    model: string;
    table: typeof RightTable;
    key: string;
    extract: boolean;
    returnType: typeof RightTable.$inferSelect;
  }[];
};

export const config: RelationConfig = {
  name: "slides",
  type: "many" as const,
  model,
  leftTable: {
    model,
    table: Table,
    key: "pageId",
  },
  rightTables: [
    {
      model: rightTableModel,
      table: RightTable,
      key: "slideId",
      extract: true,
      returnType: RightTable.$inferSelect,
    },
  ],
};

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [model]: helpers.many(config.leftTable.table),
  };
};

export const populate = {
  [model]: {
    with: parentPopulate,
  },
};
