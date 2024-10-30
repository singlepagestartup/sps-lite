import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/broadcast/models/message/backend/repository/database";
import { RBAC_SECRET_KEY, STALE_TIME } from "@sps/shared-utils";
import { api } from "@sps/broadcast/models/message/sdk/server";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  async create(props: { data: any }): Promise<any | null> {
    if (!RBAC_SECRET_KEY) {
      throw new Error("RBAC_SECRET_KEY is not defined");
    }

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
        await api.delete({
          id: oldEntity.id,
          options: {
            headers: {
              "X-RBAC-SECRET-KEY": RBAC_SECRET_KEY,
            },
            next: {
              cache: "no-store",
            },
          },
        });
      }
    }

    return superResult;
  }
}
