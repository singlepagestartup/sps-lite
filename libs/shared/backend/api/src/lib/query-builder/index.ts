import { AnyColumn, SQL, SQLWrapper } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export interface QueryBuilderParams<T extends PgTableWithColumns<any>> {
  orderBy?: {
    key: keyof T["$inferSelect"];
    type: keyof QueryBuilderQueryOperators;
  };
}

export interface QueryBuilderPopulateParams {
  orderBy?: (...props: any) => SQL<any>[];
}

export interface QueryBuilderQueryOperators {
  asc: (column: SQLWrapper | AnyColumn) => SQL<unknown>;
  desc: (column: SQLWrapper | AnyColumn) => SQL<unknown>;
}

export interface RelationPopulateQueryBuilderProps<
  T extends PgTableWithColumns<any>,
> {
  params: { [key: string]: QueryBuilderParams<T> };
  modelName: string;
}

export const relationPopulateQueryBuilder = <T extends PgTableWithColumns<any>>(
  params: RelationPopulateQueryBuilderProps<T>["params"],
  modelName: RelationPopulateQueryBuilderProps<T>["modelName"],
) => {
  const modelParams = params?.[modelName];

  if (!modelParams || !Object.keys(modelParams).length) {
    return true;
  }

  const passParams: QueryBuilderPopulateParams = {};

  if (modelParams.orderBy) {
    if (modelParams.orderBy.key && modelParams.orderBy.type) {
      const orderBy = modelParams.orderBy;

      passParams["orderBy"] = (
        table: T,
        queryFunctions: QueryBuilderQueryOperators,
      ) => {
        const tableColumn = table[orderBy.key];

        if (tableColumn) {
          return [queryFunctions[orderBy.type](tableColumn)];
        }

        return [];
      };
    }
  }

  return passParams;
};
