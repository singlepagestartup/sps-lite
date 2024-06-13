import { SQL, getOperators } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

interface QueryBuilderFilterMethods extends ReturnType<typeof getOperators> {}

interface Filter {
  column: string;
  method: keyof QueryBuilderFilterMethods;
  value: any;
}

export interface QueryBuilderProps<T extends PgTableWithColumns<any>> {
  table: Partial<T>;
  queryFunctions: QueryBuilderFilterMethods;
  filters: {
    ["and"]: Filter[];
  };
}

/**
 * {
 *  ...,
 *  "filters": {
 *      "and": [
 *          {
 *              "column": "title",
 *              "method": "eq"
 *              "value": "Hello" | 1 | undefined | true | 2,30
 *          }
 *      ]
 *  }
 * }
 */
export const queryBuilder = <T extends PgTableWithColumns<any>>(
  params: QueryBuilderProps<T>,
) => {
  const { table, queryFunctions, filters } = params;

  if (!filters) {
    return;
  }

  const filterTypes = Object.keys(filters);

  if (filterTypes.find((filterType) => filterType !== "and")) {
    throw new Error(
      `You are using wrong filter type, now allowed filter types are: [${["'and'"].join(", ")}]`,
    );
  }

  const filterArrays = filters?.["and"];

  const resultQueries: (SQL<any> | undefined)[] = [];

  for (const filter of filterArrays) {
    const filterMethod: keyof QueryBuilderFilterMethods = filter?.method;
    const filterColumn: keyof T["$inferSelect"] = filter?.column;
    const filterValue = filter?.value;
    console.log(`🚀 ~ filterValue:`, filterValue);

    const tableColumn = table[filterColumn];

    if (!tableColumn) {
      throw new Error(`You are missing a column in the filter object`);
    }

    const method: keyof QueryBuilderFilterMethods = filterMethod;

    if (!method) {
      throw new Error(`You are missing a method in the filter object`);
    }

    if (method === "notInArray" || method === "inArray") {
      return;
    }

    if (
      method === "eq" ||
      method === "gt" ||
      method === "lt" ||
      method === "ilike" ||
      method === "like" ||
      method === "not" ||
      method === "lte" ||
      method === "gte" ||
      method === "notIlike" ||
      method === "notLike" ||
      method === "ne"
    ) {
      resultQueries.push(queryFunctions[method](tableColumn, filterValue));
    }

    if (
      method === "exists" ||
      method === "notExists" ||
      method === "isNull" ||
      method === "isNotNull"
    ) {
      resultQueries.push(queryFunctions[method](tableColumn));
    }

    if (
      method === "between" ||
      method === "notBetween" ||
      method === "or" ||
      method === "sql" ||
      method === "and"
    ) {
      throw new Error(`Method '${method}' not implemented`);
    }
  }

  return queryFunctions.and(...resultQueries);
};
