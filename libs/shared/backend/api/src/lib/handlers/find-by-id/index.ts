import { eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseHandlerParams } from "../interfaces";

export async function handler<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IBaseHandlerParams<Schema, DBType, TableType> & { id: string }) {
  const { id, db, Table } = params;

  const result = await db.select().from(Table).where(eq(Table["id"], id));

  // const transformedData = transformData({ data });

  return result[0];
}

// export async function handler(params: IHandlerParams) {
//   const data = await getById(params);

//   return data;
// }
