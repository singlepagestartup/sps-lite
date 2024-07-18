import "reflect-metadata";
import { DI, type IDefaultService } from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  schemaName,
  Table,
  insertSchema,
} from "@sps/sps-rbac/models/identity/backend/schema/root";

@injectable()
export class Model {
  constructor(@inject(DI.IService) service: IDefaultService) {}
}
