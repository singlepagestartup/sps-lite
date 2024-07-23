import { IConfiguration } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
  selectSchema,
} from "@sps/sps-rbac/models/permission/backend/schema/table";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { injectable } from "inversify";

@injectable()
export class Configuration implements IConfiguration {
  repository: {
    type: "database";
    schema: any;
    Table: PgTableWithColumns<any>;
    insertSchema: any;
    selectSchema: any;
    dump: {
      type: "json";
      directory: string;
    };
  };

  constructor() {
    this.repository = {
      type: "database",
      schema: schema,
      Table: Table,
      insertSchema,
      selectSchema,
      dump: {
        type: "json",
        directory: `${__dirname}/data`,
      },
    };
  }
}
