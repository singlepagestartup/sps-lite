import { db } from "@sps/sps-db-provider";
import {
  Table,
  config,
  insertSchema,
} from "@sps/sps-website-builder-models-feature-backend-schema";
import { eq } from "drizzle-orm";
import { service as findById } from "../find-by-id";
import { insertRelations } from "@sps/shared-backend-api";

export async function service(props: { id: string; data: any }) {
  const { id, data } = props;

  const plainData = insertSchema.parse(data);

  if (Object.keys(plainData).length) {
    const [entity] = await db
      .update(Table)
      .set(plainData)
      .where(eq(Table.id, id))
      .returning();
  }

  await insertRelations({
    db,
    id,
    data,
    config,
  });

  const transformedEntity = await findById({
    id,
  });

  if (!transformedEntity) {
    throw new Error("Entity not found");
  }

  return transformedEntity;
}