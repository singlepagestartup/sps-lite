import { FindServiceProps, queryBuilder } from "@sps/shared-backend-api";
import { db } from "@sps/sps-db-provider";
import {
  populate,
  schemaName,
  Table,
} from "@sps/sps-website-builder-relations-sliders-to-slides-backend-schema";

export async function service(props?: FindServiceProps) {
  const result = await db.query[schemaName].findMany({
    with: populate(props?.params?.populate),
    where(table, queryFunctions) {
      return queryBuilder.filters<typeof Table>({
        table,
        queryFunctions,
        filters: props?.params?.filters,
      });
    },
  });

  return result;
}
