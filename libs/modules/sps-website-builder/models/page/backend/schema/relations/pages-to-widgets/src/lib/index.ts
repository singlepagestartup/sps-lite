import {
  Table,
  modelName,
} from "@sps/sps-website-builder-relations-pages-to-widgets-backend-schema";
import { TableRelationsHelpers } from "drizzle-orm";
import {
  RelationPopulateQueryBuilderProps,
  relationPopulateQueryBuilder,
} from "@sps/shared-backend-api";

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [modelName]: helpers.many(Table),
  };
};

export const populate = (
  params: RelationPopulateQueryBuilderProps<typeof Table>["params"],
) => relationPopulateQueryBuilder<typeof Table>(params, modelName);
