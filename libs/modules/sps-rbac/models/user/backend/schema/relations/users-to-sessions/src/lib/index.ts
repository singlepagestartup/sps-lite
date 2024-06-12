import {
  Table,
  modelName,
} from "@sps/sps-rbac-relations-users-to-sessions-backend-schema";
import { TableRelationsHelpers } from "drizzle-orm";
import {
  PopulateQueryBuilderProps,
  queryBuilder,
} from "@sps/shared-backend-api";

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(Table),
  };
};

export const populate = (
  params: PopulateQueryBuilderProps<typeof Table>["params"],
) => queryBuilder.populate<typeof Table>(params, modelName);
