import { IConfiguration } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/backend/schema/root";
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
  };

  constructor() {
    this.repository = {
      type: "database",
      schema: schema,
      Table: Table,
      insertSchema,
      selectSchema,
    };
  }
}
