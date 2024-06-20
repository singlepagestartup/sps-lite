import { db } from "@sps/sps-host/backend/db/root";
import { Table } from "@sps/sps-host/relations/pages-to-widgets/backend/schema/root";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
