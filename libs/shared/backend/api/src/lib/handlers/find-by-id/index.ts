// @ts-nocheck
import { HasDefault, Relations, eq } from "drizzle-orm";
import { PgTableWithColumns, PgUUIDBuilderInitial } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IHandlerParams {
  id: string;
  db: PostgresJsDatabase<any>;
  modelName: string;
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
  populate: {
    [key: string]: any;
  };
  transformData: (data: any) => any;
}

async function getById({
  id,
  db,
  modelName,
  populate,
  Table,
  Relations,
  transformData,
}: IHandlerParams) {
  const data = await db.query[modelName].findFirst({
    where: eq(Table["id"], id),
    with: populate,
  });

  const transformedData = transformData({ data });

  return transformedData;
}

export async function handler(params: IHandlerParams) {
  const data = await getById(params);

  return data;
}
