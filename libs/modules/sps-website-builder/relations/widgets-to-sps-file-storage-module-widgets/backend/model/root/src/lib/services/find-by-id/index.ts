import { db } from "@sps/sps-website-builder/backend/db/root";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-website-builder/relations/widgets-to-sps-file-storage-module-widgets/backend/schema/root";
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
