// @ts-nocheck
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  db: PostgresJsDatabase<any>;
  Table: PgTableWithColumns<{
    name: string;
    schema: any;
    dialect: "pg";
    columns: any;
  }>;
  data: any;
}

export async function handler({ db, Table, data }: IHandlerParams) {
  const entities = await db.insert(Table).values(data).returning();

  return entities[0];
}
