import {
  Table,
  modelName,
} from "@sps/sps-website-builder-relations-pages-to-widgets-backend-schema";
import { TableRelationsHelpers, asc } from "drizzle-orm";

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(Table),
  };
};

export const populate = {
  [modelName]: {
    orderBy: [asc(Table.orderIndex)],
  },
};
