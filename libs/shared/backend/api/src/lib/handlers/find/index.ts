import { DrizzleConfig, HasDefault, Relations } from "drizzle-orm";
import { PgTableWithColumns, PgUUIDBuilderInitial } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
> {
  db: DBType;
  Table: TableType;
  // modelName: string;
  // populate: {
  //   [key: string]: any;
  // };
  // Table: PgTableWithColumns<{
  //   name: string;
  //   schema: any;
  //   dialect: "pg";
  //   columns: {
  //     id: HasDefault<PgUUIDBuilderInitial<"id">>;
  //   } & any;
  // }>;
  // Relations: Relations<
  //   any,
  //   {
  //     [key: string]: any;
  //   }
  // >;
  // transformData: (data: any) => any;
}

export async function handler<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
>(params: IHandlerParams<Schema, DBType, TableType>) {
  const { db, Table } = params;

  const data = await db.select().from(Table);

  return data;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
