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
  const queryParams = params?.[modelName];

  if (!queryParams || !Object.keys(queryParams).length) {
    return true;
  }

  const passParams: QueryBuilderParams = {};

  if (queryParams.orderBy) {
    if (queryParams.orderBy.column && queryParams.orderBy.method) {
      const orderBy = queryParams.orderBy;

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
