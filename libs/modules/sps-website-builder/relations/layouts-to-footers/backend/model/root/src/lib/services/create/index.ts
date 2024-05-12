import { db } from "@sps/sps-db-provider";
import {
  Table,
  insertSchema,
} from "@sps/sps-website-builder-relations-layouts-to-footers-backend-schema";
import { service as findById } from "../find-by-id";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  const transformedEntity = await findById({
    id: entity.id,
  });

  if (!transformedEntity) {
    throw new Error("Entity not found");
  }

  return transformedEntity;
}
