import "reflect-metadata";
import { injectable } from "inversify";
import { RESTController } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder/relations/navbars-to-widgets/backend/schema/root";

@injectable()
export class Controller extends RESTController<
  (typeof Table)["$inferSelect"]
> {}