import { db } from "@sps/sps-rbac/backend/db/root";
import {
  insertSchema,
  Table,
} from "@sps/sps-rbac/models/widget/backend/schema/root";

export async function action(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
