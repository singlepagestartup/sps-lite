import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/broadcast/models/message/backend/repository/database";
import { STALE_TIME } from "@sps/shared-utils";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async create(props: { data: any }): Promise<any | null> {
    const superResult = await super.create(props);

    const oldEntities = await this.find({
      params: {
        filters: {
          and: [
            {
              column: "createdAt",
              method: "lt",
              value: new Date(new Date().getTime() - STALE_TIME * 5),
            },
          ],
        },
      },
    });

    if (oldEntities.length) {
      for (const oldEntity of oldEntities) {
        await this.delete({ id: oldEntity.id });
      }
    }

    return superResult;
  }
}
