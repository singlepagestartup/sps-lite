import "reflect-metadata";
import { injectable } from "inversify";
import { RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/schema/root";

@injectable()
export class Controller extends RESTController<
  (typeof Table)["$inferSelect"]
> {}
