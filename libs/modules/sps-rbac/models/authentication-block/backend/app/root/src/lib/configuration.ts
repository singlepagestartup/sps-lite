import { IConfiguration } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import { Table } from "@sps/sps-rbac/models/authentication-block/backend/schema/table";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { injectable } from "inversify";

@injectable()
export class Configuration implements IConfiguration {
  repository: { type: "database"; schema: any; Table: PgTableWithColumns<any> };

  constructor() {
    this.repository = {
      type: "database",
      schema: schema,
      Table: Table,
    };
  }
}
