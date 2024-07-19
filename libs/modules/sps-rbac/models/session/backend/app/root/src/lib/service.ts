import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/session/backend/schema/table";
import { Repository } from "./repository";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: Repository) {
    super(repository);
  }

  async create(data: any) {
    if (!data.expiresAt) {
      data.expiresAt = new Date();
      data.expiresAt.setHours(data.expiresAt.getHours() + 1);
    }

    const superResult = super.create(data);

    const expiredSessions = await this.repository.find({
      params: {
        filters: {
          and: [
            {
              column: "expiresAt",
              method: "gt",
              value: new Date(),
            },
          ],
        },
      },
    });

    for (const expiredSession of expiredSessions) {
      if (expiredSession.id) {
        await this.repository.deleteFirstByField("id", expiredSession.id);
      }
    }

    return superResult;
  }
}
