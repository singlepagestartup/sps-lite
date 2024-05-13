import { db } from "@sps/sps-db-provider";
import { Table } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-backend-schema";
import { eq } from "drizzle-orm";

export async function service(props: { id: string }) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
