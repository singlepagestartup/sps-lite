import { db } from "@sps/sps-website-builder/backend/db/root";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder/relations/footer-blocks-to-buttons-arrays/backend/schema/root";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
