import { db } from "@sps/sps-db-provider";
import {
  insertSchema,
  Table,
} from "@sps/sps-rbac-models-authentication-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);
  console.log(`🚀 ~ service ~ plainData:`, plainData);

  // const [entity] = await db.insert(Table).values(plainData).returning();

  return { ok: true };
}
