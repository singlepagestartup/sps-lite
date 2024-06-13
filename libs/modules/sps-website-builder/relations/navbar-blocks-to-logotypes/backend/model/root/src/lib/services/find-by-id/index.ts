import { db } from "@sps/sps-website-builder-backend-db";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-backend-schema";
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
