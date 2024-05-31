import { and, eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

/**
 * {
 *  "filters": [{
 *     "column": "title",
 *     "eq": "asc"
 *     "value": "Hello" | 1 | undefined | true | ["Hello","world","!"] | 2,30
 *   }
 * }]
 */
export function parseQueryFilters({
  queryFilters,
  Table,
}: {
  queryFilters: any;
  Table: PgTableWithColumns<any>;
}): any {
  let filter: any = undefined;

  if (queryFilters["$and"] && Array.isArray(queryFilters["$and"])) {
    const typedFilters = queryFilters["$and"]
      .filter((filterValue: { [key: string]: string }) => {
        if (Object.keys(filterValue).length === 0) {
          return false;
        }

        if (Object.keys(filterValue).length > 1) {
          return false;
        }

        for (const filterKey of Object.keys(filterValue)) {
          if (!Table[filterKey]) {
            return false;
          }
        }

        return true;
      })
      .map((filterValue: { [key: string]: string }) => {
        const filterKey = Object.keys(filterValue)[0];
        const filterValueValue = filterValue[filterKey];
        console.log(`🚀 ~ .map ~ filterKey:`, filterKey);
        console.log(`🚀 ~ .map ~ filterValueValue:`, filterValueValue);

        return eq(Table[filterKey], filterValueValue);
      });

    if (typedFilters.length > 0) {
      filter = and(...typedFilters);
    }
  }

  return filter;
}
