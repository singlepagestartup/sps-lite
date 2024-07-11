import { db } from "@sps/sps-rbac/backend/db/root";
import {
  insertSchema,
  Table,
} from "@sps/sps-rbac/models/session/backend/schema/root";
import { service as findEntities } from "../find";
import { service as deleteEntity } from "../delete";

export async function service(props: { data: typeof Table.$inferInsert }) {
  const { data } = props;

  data.expiresAt = new Date(data.expiresAt);

  const plainData = insertSchema.parse(data);

  const [entity] = await db.insert(Table).values(plainData).returning();

  const expiredSessions = await findEntities({
    params: {
      filters: {
        and: [
          {
            column: "expiresAt",
            method: "lt",
            value: new Date(),
          },
        ],
      },
    },
  });

  for (const expiredSession of expiredSessions) {
    await deleteEntity({
      id: expiredSession.id,
    });
  }

  return entity;
}
