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
>(params: IServiceParams<Schema, DBType, TableType> & { id: string }) {
  const { id, db, Table } = params;

  const result = await db.select().from(Table).where(eq(Table["id"], id));

  // const transformedData = transformData({ data });

  return result[0];
}

// export async function handler(params: IHandlerParams) {
//   const data = await getById(params);

//   return data;
// }
