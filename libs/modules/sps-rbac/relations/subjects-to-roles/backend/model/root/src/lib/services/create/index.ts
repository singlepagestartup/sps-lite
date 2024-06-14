import { db } from "@sps/sps-db-provider";
import {
  Table,
  insertSchema,
} from "@sps/sps-rbac-relations-subjects-to-roles-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
