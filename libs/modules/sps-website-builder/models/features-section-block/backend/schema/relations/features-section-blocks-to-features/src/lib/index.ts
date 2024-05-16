import {
  Table,
  modelName,
} from "@sps/sps-website-builder-relations-features-section-blocks-to-features-backend-schema";
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
