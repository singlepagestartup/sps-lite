import { db } from "@sps/sps-website-builder-backend-db";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-module-widgets-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
