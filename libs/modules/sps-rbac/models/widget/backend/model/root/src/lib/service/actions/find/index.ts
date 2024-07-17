import { FindServiceProps, queryBuilder } from "@sps/shared-backend-api";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  populate,
  schemaName,
  Table,
} from "@sps/sps-rbac/models/widget/backend/schema/root";

export async function action(props?: FindServiceProps) {
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
