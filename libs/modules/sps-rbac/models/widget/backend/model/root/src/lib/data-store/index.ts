import {
  DefaultStore,
  DI,
  type IDefaultDatabase,
} from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/table";
import { inject, injectable } from "inversify";

@injectable()
export class DataStore extends DefaultStore<(typeof Table)["$inferSelect"]> {
  constructor(
    @inject(DI.IDatabase)
    db: IDefaultDatabase<
      (typeof Table)["$inferSelect"],
      typeof schema,
      typeof Table
    >,
  ) {
    super(db);
  }
}
