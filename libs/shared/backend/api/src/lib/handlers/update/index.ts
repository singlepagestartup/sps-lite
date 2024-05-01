import { HasDefault, eq } from "drizzle-orm";
import { PgTableWithColumns, PgUUIDBuilderInitial } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  id: string;
  db: PostgresJsDatabase<any>;
  Table: PgTableWithColumns<{
    name: string;
    schema: any;
    dialect: "pg";
    columns: {
      id: HasDefault<PgUUIDBuilderInitial<"id">>;
    } & any;
  }>;
  data: any;
}

export async function handler({ id, db, Table, data }: IHandlerParams) {
  const entities = await db
    .update(Table)
    .set(data)
    .where(eq(Table["id"], id))
    .returning();

  return entities[0];
}
