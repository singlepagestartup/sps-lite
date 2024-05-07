import { db } from "@sps/sps-db-provider";
import { insertSchema } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  Table,
  config,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { eq } from "drizzle-orm";
import { service as findById } from "../find-by-id";
import { RelationConfig, insertRelations } from "@sps/shared-backend-api";

export async function service(props: { id: string; data: any }) {
  const { id, data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db
    .update(Table)
    .set(plainData)
    .where(eq(Table.id, id))
    .returning();

  await insertRelations({
    db,
    id,
    data,
    config,
  });

  const updatedEntity = await findById({
    id,
  });

  if (!updatedEntity) {
    throw new Error("Entity not found");
  }

  return updatedEntity;
}
