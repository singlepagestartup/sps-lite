import { db } from "@sps/sps-third-parties/backend/db/root";
import {
  insertSchema,
  Table,
} from "@sps/sps-third-parties/models/telegram/backend/schema/root";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
