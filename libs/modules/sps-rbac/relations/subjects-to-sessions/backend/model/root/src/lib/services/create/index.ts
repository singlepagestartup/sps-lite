import { db } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
} from "@sps/sps-rbac/relations/subjects-to-sessions/backend/schema/root";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
