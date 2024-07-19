import { DefaultDataStore } from "@sps/shared-backend-api";
import { db } from "@sps/sps-rbac/backend/db/root";
import {
  insertSchema,
  schemaName,
  Table,
} from "@sps/sps-rbac/models/widget/backend/schema/table";
import { injectable } from "inversify";

@injectable()
export class DataStore extends DefaultDataStore<typeof Table, typeof db> {
  constructor() {
    super(db, schemaName, Table, insertSchema);
  }
}
