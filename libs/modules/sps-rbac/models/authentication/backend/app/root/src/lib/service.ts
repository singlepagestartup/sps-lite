import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CRUDService, DI, type IRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/authentication/backend/schema/table";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {
  constructor(@inject(DI.IRepository) repository: IRepository) {
    super(repository);
  }

  async isAuthenticatated(): Promise<any> {
    return {
      ok: true,
    };
  }

  async logout(): Promise<any> {
    return {
      ok: true,
    };
  }

  async providers(): Promise<any> {
    return {
      ok: true,
    };
  }
}
