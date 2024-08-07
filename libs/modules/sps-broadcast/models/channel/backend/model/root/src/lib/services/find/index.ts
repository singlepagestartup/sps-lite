import { FindServiceProps, queryBuilder } from "@sps/shared-backend-api";
import { db } from "@sps/sps-broadcast/backend/db/root";
import {
  populate,
  schemaName,
  Table,
} from "@sps/sps-broadcast/models/channel/backend/schema/root";

export async function service(props?: FindServiceProps) {
  const result = await db.query[schemaName].findMany({
    with: populate(props?.params?.populate),
    orderBy(table, queryFunctions) {
      return queryBuilder.orderBy<typeof Table>({
        table,
        queryFunctions,
        orderBy: props?.params?.orderBy,
      });
    },
    where(table, queryFunctions) {
      return queryBuilder.filters<typeof Table>({
        table,
        queryFunctions,
        filters: props?.params?.filters,
      });
    },
    offset: props?.params?.offset,
    limit: props?.params?.limit,
  });

  return result;
}
