import { db } from "@sps/startup/backend/db/root";
import {
  insertSchema,
  Table,
} from "@sps/startup/models/widget/backend/schema/root";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
