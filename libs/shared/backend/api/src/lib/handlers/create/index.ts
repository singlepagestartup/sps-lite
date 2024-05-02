// @ts-nocheck
import { HasDefault, Relations } from "drizzle-orm";
import { PgTableWithColumns, PgUUIDBuilderInitial } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  db: PostgresJsDatabase<any>;
  Table: PgTableWithColumns<{
    name: string;
    schema: any;
    dialect: "pg";
    columns: {
      id: HasDefault<PgUUIDBuilderInitial<"id">>;
    } & any;
  }>;
  Relations: Relations<
    any,
    {
      [key: string]: any;
    }
  >;
  data: any;
}

export async function handler({ db, Table, Relations, data }: IHandlerParams) {
  const entities = await db.insert(Table).values(data).returning();

  return entities[0];
}
