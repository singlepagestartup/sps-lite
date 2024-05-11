import { db } from "@sps/sps-db-provider";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-backend-schema";
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

  const transformedEntity = await findById({
    id,
  });

  if (!transformedEntity) {
    throw new Error("Entity not found");
  }

  return transformedEntity;
}
