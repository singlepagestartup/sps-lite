import { OrderByOperators, SQL } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export interface QueryBuilderQueryOperators
  extends Omit<OrderByOperators, "sql"> {}

export interface QueryBuilderParams {
  orderBy?: (...props: any) => SQL<any>[];
}

export interface QueryBuilderProps<T extends PgTableWithColumns<any>> {
  table: Partial<T>;
  queryFunctions: QueryBuilderQueryOperators;
  orderBy?: {
    column: keyof T["$inferSelect"];
    method: keyof QueryBuilderQueryOperators;
  };
}

/**
 * {
 *   "orderBy": {
 *      and: [
 *          {
 *            "column": "orderIndex",
 *            "method": "asc"
 *          }
 *      ]
 *   }
 * }
 */
export const queryBuilder = <T extends PgTableWithColumns<any>>(
  params: QueryBuilderProps<T>,
) => {
  const { table, queryFunctions, orderBy } = params;

  if (!orderBy || !Object.keys(orderBy).length) {
    return [];
  }

  const resultQueries: SQL<any>[] = [];

  if (orderBy) {
    const orderByColumn: keyof T["$inferSelect"] = orderBy?.column;
    const tableColumn = table[orderByColumn];

    if (tableColumn) {
      resultQueries.push(queryFunctions[orderBy.method](tableColumn));
    }
  }

  return resultQueries;
};
