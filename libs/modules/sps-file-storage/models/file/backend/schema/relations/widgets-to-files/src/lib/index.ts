import {
  Table,
  modelName,
} from "@sps/sps-file-storage-relations-widgets-to-files-backend-schema";
import { TableRelationsHelpers } from "drizzle-orm";

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(Table),
  };
};

export const populate = {
  [modelName]: true,
} as const;