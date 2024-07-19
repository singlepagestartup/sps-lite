import { DefaultDatabase } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import {
  insertSchema,
  schemaName,
  Table,
} from "@sps/sps-rbac/models/role/backend/schema/table";
import { inject, injectable } from "inversify";

@injectable()
export class Database extends DefaultDatabase<typeof schema, typeof Table> {
  constructor() {
    super(schema, Table);
  }
}
