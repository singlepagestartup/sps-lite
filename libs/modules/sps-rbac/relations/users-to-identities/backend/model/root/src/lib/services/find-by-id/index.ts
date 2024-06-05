import { db } from "@sps/sps-db-provider";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-rbac-relations-users-to-identities-backend-schema";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, id),
    with: populate(props?.params?.populate),
  });

  if (!result) {
    return null;
  }

  return result;
}
