import { db } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
} from "@sps/sps-rbac/models/session/backend/schema/root";
import { eq } from "drizzle-orm";

export async function service(props: {
  id: string;
  data: typeof Table.$inferInsert;
}) {
  const { id, data } = props;

  data.expiresAt = new Date(data.expiresAt);

  const plainData = insertSchema.parse(data);

  const [entity] = await db
    .update(Table)
    .set(plainData)
    .where(eq(Table.id, id))
    .returning();

  return entity;
}
