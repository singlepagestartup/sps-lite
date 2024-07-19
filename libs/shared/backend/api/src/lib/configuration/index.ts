import { PgTableWithColumns } from "drizzle-orm/pg-core";

export interface IConfiguration {
  repository: {
    type: "database";
    schema: any;
    Table: PgTableWithColumns<any>;
  };
}
