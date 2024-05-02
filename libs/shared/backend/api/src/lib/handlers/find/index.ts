import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseHandlerParams } from "../interfaces";

export async function handler<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IBaseHandlerParams<Schema, DBType, TableType>) {
  const { db, Table } = params;

  const data = await db.select().from(Table);

  return data;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
