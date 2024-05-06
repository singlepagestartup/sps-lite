import { db } from "@sps/sps-db-provider";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { eq } from "drizzle-orm";

export async function service(props: { id: string; data: any }) {
  const { id, data } = props;

  const passData = insertSchema.parse(data);

  const [result] = await db
    .update(Table)
    .set(passData)
    .where(eq(Table.id, id))
    .returning();

  return result;
}
