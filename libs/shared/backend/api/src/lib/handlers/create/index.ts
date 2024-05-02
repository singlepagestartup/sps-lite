import { PgInsertValue, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseHandlerParams } from "../interfaces";

interface IHandlerParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseHandlerParams<Schema, DBType, TableType> {
  data: PgInsertValue<TableType>;
}

export async function handler<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IHandlerParams<Schema, DBType, TableType>) {
  const { db, Table, data } = params;

  const entities: TableType["$inferSelect"][] = await db
    .insert(Table)
    .values(data)
    .returning();

  return entities[0];
}
