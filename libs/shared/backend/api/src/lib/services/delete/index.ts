import { eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseServiceParams<Schema, DBType, TableType> {
  id: string;
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IServiceParams<Schema, DBType, TableType>) {
  const { db, Table, id } = params;

  const entities: TableType["$inferSelect"][] = await db
    .delete(Table)
    .where(eq(Table["id"], id))
    .returning();

  return entities[0];
}
