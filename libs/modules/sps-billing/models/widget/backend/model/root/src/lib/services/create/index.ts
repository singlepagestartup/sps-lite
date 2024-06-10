import { db } from "@sps/sps-billing-backend-db";
import {
  insertSchema,
  Table,
} from "@sps/sps-billing-models-widget-backend-schema";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}