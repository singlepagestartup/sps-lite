import {
  Table,
  model,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import {
  Table as SPSWBLayout,
  model as spsWBLayoutModel,
} from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { TableRelationsHelpers } from "drizzle-orm";

export const config = {
  name: "layouts",
  type: "many" as const,
  model,
  leftTable: {
    model,
    table: Table,
    key: "pageId",
  },
  rightTable: {
    model: spsWBLayoutModel,
    table: SPSWBLayout,
    key: "layoutId",
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
    with: pagesToLayoutsPopulate,
  },
};
