import { db } from "@sps/sps-website-builder/backend/db/root";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder/models/button/backend/schema/root";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
