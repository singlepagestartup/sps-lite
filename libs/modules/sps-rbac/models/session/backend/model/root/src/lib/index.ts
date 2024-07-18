import "reflect-metadata";
import {
  DI,
  DefaultModel,
  type IDefaultService,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  schemaName,
  Table,
  insertSchema,
} from "@sps/sps-rbac/models/session/backend/schema/root";

@injectable()
export class Model extends DefaultModel {
  constructor(@inject(DI.IService) service: IDefaultService) {
    super({
      service,
      db,
      schemaName,
      Table,
      insertSchema,
    });
  }

  async create(props: { data: typeof Table.$inferInsert }) {
    const { data } = props;

    data.expiresAt = new Date(data.expiresAt);

    const plainData = insertSchema.parse(data);

    const [entity] = await db.insert(Table).values(plainData).returning();

    const filterParams = {
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
    };

    const expiredSessions = await this.find();

    for (const expiredSession of expiredSessions) {
      await this.delete({
        id: expiredSession.id,
      });
    }

    return entity;
  }
}
