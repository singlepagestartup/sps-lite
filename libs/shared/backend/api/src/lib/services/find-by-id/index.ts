import { eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { IBaseServiceParams, IResultData } from "../interfaces";
import { service as getWithRelations } from "../get-with-relations";

interface IServiceParams<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
> extends IBaseServiceParams<Schema, DBType, TableType, RelationsConfig> {
  id: string;
}

export async function service<
  Schema extends Record<string, unknown>,
  DBType extends PostgresJsDatabase<Schema>,
  TableType extends PgTableWithColumns<any>,
  RelationsConfig extends { [key: string]: any },
>(
  params: IServiceParams<Schema, DBType, TableType, RelationsConfig> & {
    id: string;
  },
) {
  const { id, db, Table, config } = params;

  const entities = await db.select().from(Table).where(eq(Table["id"], id));
  const entity = entities[0];

  const populated = entity;

  // const transformedData = transformData({ data });

  return populated;
}

// export async function handler(params: IHandlerParams) {
//   const data = await getById(params);

//   return data;
// }
