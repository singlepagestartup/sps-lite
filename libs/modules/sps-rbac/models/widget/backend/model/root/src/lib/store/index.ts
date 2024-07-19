import {
  DefaultStore,
  DI,
  type IDatabaseStoreClient,
} from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/table";
import { inject, injectable } from "inversify";

@injectable()
export class Store extends DefaultStore<(typeof Table)["$inferSelect"]> {
  constructor(
    @inject(DI.IStoreClient)
    db: IDatabaseStoreClient<
      (typeof Table)["$inferSelect"],
      typeof schema,
      typeof Table
    >,
  ) {
    super(db);
  }
}
