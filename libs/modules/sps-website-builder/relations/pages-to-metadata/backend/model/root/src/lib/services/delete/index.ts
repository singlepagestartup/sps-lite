import { db } from "@sps/sps-website-builder/backend/db/root";
import { Table } from "@sps/sps-website-builder/relations/pages-to-metadata/backend/schema/root";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
