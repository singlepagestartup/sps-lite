import { db } from "@sps/sps-db-provider";
import { insertSchema } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";

export async function service(props: { id: string; data: any }) {
  const { id, data } = props;

  const plainData = insertSchema.parse(data);

  if (Object.keys(plainData).length) {
    const [entity] = await db
      .update(Table)
      .set(plainData)
      .where(eq(Table.id, id))
      .returning();

    return entity;
  }

  return {};
}
