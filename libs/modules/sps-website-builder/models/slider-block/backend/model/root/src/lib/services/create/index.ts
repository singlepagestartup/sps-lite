import { db } from "@sps/sps-db-provider";
import {
  Table,
  config,
  insertSchema,
} from "@sps/sps-website-builder-models-slider-block-backend-schema";
import { service as findById } from "../find-by-id";
import { insertRelations } from "@sps/shared-backend-api";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  await insertRelations({
    db,
    id: entity.id,
    data,
    config,
  });

  const transformedEntity = await findById({
    id: entity.id,
  });

  if (!transformedEntity) {
    throw new Error("Entity not found");
  }

  return transformedEntity;
}
