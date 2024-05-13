import { PgInsertValue, PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
> extends IBaseServiceParams<Schema, DBType, TableType, RelationsConfig> {
  data: PgInsertValue<TableType>;
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
>(params: IServiceParams<Schema, DBType, TableType, RelationsConfig>) {
  const { db, Table, data } = params;

  const entities: TableType["$inferSelect"][] = await db
    .insert(Table)
    .values(data)
    .returning();

  return entities[0];
}
