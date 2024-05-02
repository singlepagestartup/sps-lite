import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> extends IBaseServiceParams<Schema, DBType, TableType> {}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IServiceParams<Schema, DBType, TableType>) {
  const { db, Table } = params;

  const data = await db.select().from(Table);

  return data;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
