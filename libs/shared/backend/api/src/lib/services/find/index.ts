import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams } from "../interfaces";
import { SQL } from "drizzle-orm";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
> extends IBaseServiceParams<Schema, DBType, TableType, RelationsConfig> {
  filter?: SQL<unknown>;
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RC extends { [key: string]: any },
>(params: IServiceParams<Schema, DBType, TableType, RC>) {
  const { db, Table, config, filter } = params;

  const data = await db.select().from(Table).where(filter);

  // console.log(`🚀 ~ filledData:`, filledData[0]);

  // return filledData;
  return data;
  // const transformedData: typeof data = [];

  // for (const item of data) {
  //   transformedData.push(transformData({ data: item }) as any);
  // }

  // return transformedData;
}
