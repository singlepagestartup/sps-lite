import { db } from "@sps/sps-website-builder-backend-db";
import { Table } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-backend-schema";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
