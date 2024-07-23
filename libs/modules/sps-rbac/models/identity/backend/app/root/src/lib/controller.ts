import "reflect-metadata";
import { injectable } from "inversify";
import { RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/identity/backend/schema/table";

@injectable()
export class Controller extends RESTController<
  (typeof Table)["$inferSelect"]
> {}