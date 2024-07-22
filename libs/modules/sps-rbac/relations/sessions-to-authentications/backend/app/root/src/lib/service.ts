import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/schema/root";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {}
