import { DatabaseStoreClient } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/role/backend/schema/table";
import { injectable } from "inversify";

@injectable()
export class Database extends DatabaseStoreClient<
  (typeof Table)["$inferSelect"],
  typeof schema,
  typeof Table
> {
  constructor() {
    super(schema, Table);
  }
}
