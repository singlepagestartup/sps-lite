// @ts-nocheck
import { HasDefault, Relations } from "drizzle-orm";
import { PgTableWithColumns, PgUUIDBuilderInitial } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  db: PostgresJsDatabase<any>;
  modelName: string;
  populate: {
    [key: string]: any;
  };
  Table: PgTableWithColumns<{
    name: string;
    schema: any;
    dialect: "pg";
    columns: {
      id: HasDefault<PgUUIDBuilderInitial<"id">>;
    } & any;
  }>;
  Relations: Relations<
    any,
    {
      [key: string]: any;
    }
  >;
  transformData: (data: any) => any;
}

async function find({
  db,
  modelName,
  populate,
  Table,
  Relations,
  transformData,
}: IHandlerParams) {
  const data = await db.query[modelName].findMany({ with: populate });

  const transformedData: typeof data = [];

  for (const item of data) {
    transformedData.push(transformData({ data: item }) as any);
  }

  return transformedData;
}

export async function handler(params: IHandlerParams) {
  const data = await find(params);

  return data;
}
