import { db } from "@sps/sps-db-provider";
import { Table } from "@sps/sps-website-builder-relations-slider-blocks-to-sliders-backend-schema";
import { eq } from "drizzle-orm";
import { FindByIdServiceProps } from "@sps/shared-backend-api";

export async function service(props: FindByIdServiceProps) {
  const { id } = props;

  const [entity] = await db.delete(Table).where(eq(Table.id, id)).returning();

  return entity;
}
