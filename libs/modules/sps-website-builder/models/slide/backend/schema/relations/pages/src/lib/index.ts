import {
  Table,
  model,
  populate as parentPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";
import {
  Table as RightTable,
  model as rightTableModel,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "pages",
  type: "many" as const,
  model,
  leftTable: {
    model,
    table: Table,
    key: "slideId",
  },
  rightTable: {
    model: rightTableModel,
    table: RightTable,
    key: "pageId",
  },
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
