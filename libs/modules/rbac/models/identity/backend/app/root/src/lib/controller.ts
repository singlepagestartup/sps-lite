import "reflect-metadata";
import { injectable } from "inversify";
import { RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/rbac/models/identity/backend/repository/database";

@injectable()
export class Controller extends RESTController<
  (typeof Table)["$inferSelect"]
> {}
