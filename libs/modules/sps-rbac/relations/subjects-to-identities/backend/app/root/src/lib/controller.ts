import "reflect-metadata";
import { injectable } from "inversify";
import { RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/relations/subjects-to-identities/backend/schema/root";

@injectable()
export class Controller extends RESTController<
  (typeof Table)["$inferSelect"]
> {}
