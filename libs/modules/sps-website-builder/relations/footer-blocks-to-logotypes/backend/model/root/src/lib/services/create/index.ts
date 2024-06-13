import { db } from "@sps/sps-website-builder-backend-db";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
