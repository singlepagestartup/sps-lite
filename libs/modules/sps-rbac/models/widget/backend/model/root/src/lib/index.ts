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
} from "@sps/sps-rbac/models/widget/backend/schema/root";

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
}
