import { db } from "@sps/sps-broadcast/backend/db/root";
import {
  Table,
  insertSchema,
} from "@sps/sps-broadcast/models/channel/backend/schema/root";
import { eq } from "drizzle-orm";

export async function service(props: { id: string; data: any }) {
  const { id, data } = props;

  const plainData = insertSchema.parse(data);

  if (Object.keys(plainData).length) {
    const [entity] = await db
      .update(Table)
      .set(plainData)
      .where(eq(Table.id, id))
      .returning();

    return entity;
  }

  return {};
}
