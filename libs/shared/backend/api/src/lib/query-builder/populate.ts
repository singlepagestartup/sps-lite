import { OrderByOperators, SQL } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export interface QueryBuilderQueryOperators
  extends Omit<OrderByOperators, "sql"> {}

export interface QueryBuilderParams {
  orderBy?: (...props: any) => SQL<any>[];
}

export interface QueryParams<T extends PgTableWithColumns<any>> {
  orderBy?: {
    column: keyof T["$inferSelect"];
    method: keyof QueryBuilderQueryOperators;
  };
}

export interface QueryBuilderProps<T extends PgTableWithColumns<any>> {
  params: { [key: string]: QueryParams<T> };
  modelName: string;
}

/**
 * {
 *  "pagesToWidgets": {
 *      "orderBy": {
 *         "column": "orderIndex",
 *         "method": "asc"
 *      }
 *   }
 * }
 */
export const queryBuilder = <T extends PgTableWithColumns<any>>(
  params: QueryBuilderProps<T>["params"],
  modelName: QueryBuilderProps<T>["modelName"],
) => {
  const modelParams = params?.[modelName];

  if (!modelParams || !Object.keys(modelParams).length) {
    return true;
  }

  const passParams: QueryBuilderParams = {};

  if (modelParams.orderBy) {
    if (modelParams.orderBy.column && modelParams.orderBy.method) {
      const orderBy = modelParams.orderBy;

      passParams["orderBy"] = (
        table: T,
        queryFunctions: QueryBuilderQueryOperators,
      ) => {
        const tableColumn = table[orderBy.column];

        if (tableColumn) {
          return [queryFunctions[orderBy.method](tableColumn)];
        }

        return [];
      };
    }
  }

  return passParams;
};
