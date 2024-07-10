import { db } from "@sps/sps-broadcast/backend/db/root";
import {
  insertSchema,
  Table,
  schemaName,
} from "@sps/sps-broadcast/models/message/backend/schema/root";
import { service as deleteEntity } from "../delete";
import { STALE_TIME } from "@sps/shared-utils";

export async function service(props: { data: any }) {
  const { data } = props;

  const plainData = insertSchema.parse(data);

  const oldEntities = await db.query[schemaName].findMany({
    where(fields, operators) {
      return operators.lt(
        fields.createdAt,
        new Date(new Date().getTime() - STALE_TIME),
      );
    },
  });

  if (oldEntities.length) {
    for (const oldEntity of oldEntities) {
      await deleteEntity({ id: oldEntity.id });
    }
  }

  const [entity] = await db.insert(Table).values(plainData).returning();

  return entity;
}
