import { db } from "@sps/sps-db-provider";
import {
  Table,
  config,
  insertSchema,
} from "@sps/sps-website-builder-models-button-backend-schema";
import { service as findById } from "../find-by-id";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
