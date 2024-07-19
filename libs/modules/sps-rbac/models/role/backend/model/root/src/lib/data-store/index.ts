import {
  DefaultDataStore,
  DI,
  IDefaultDatabase,
} from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/role/backend/schema/table";
import { inject, injectable } from "inversify";

@injectable()
export class DataStore extends DefaultDataStore<typeof Table, typeof schema> {
  constructor(
    @inject(DI.IDatabase) db: IDefaultDatabase<typeof schema, typeof Table>,
  ) {
    super(db);
  }
}
