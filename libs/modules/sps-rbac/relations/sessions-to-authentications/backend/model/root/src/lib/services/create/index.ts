import { db } from "@sps/sps-rbac-backend-db";
import {
  Table,
  insertSchema,
} from "@sps/sps-rbac-relations-sessions-to-authentications-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
