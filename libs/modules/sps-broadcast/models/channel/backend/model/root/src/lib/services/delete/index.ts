import { db } from "@sps/sps-broadcast/backend/db/root";
import { Table } from "@sps/sps-broadcast/models/channel/backend/schema/root";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
