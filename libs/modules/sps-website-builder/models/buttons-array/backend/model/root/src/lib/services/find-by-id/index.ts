import { db } from "@sps/sps-website-builder/backend/db/root";
import {
  Table,
  populate,
  schemaName,
} from "@sps/sps-website-builder/models/buttons-array/backend/schema/root";
import { eq } from "drizzle-orm";

export async function service(props: {
  id: string;
  params: {
    populate?: any;
  };
}) {
  const { id } = props;

  const result = await db.query[schemaName].findFirst({
    where: eq(Table.id, id),
    with: populate(props.params?.populate),
  });

  if (!result) {
    return null;
  }

  return result;
}
