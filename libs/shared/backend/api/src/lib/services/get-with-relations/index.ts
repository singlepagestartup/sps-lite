// @ts-nocheck
/**
 * Problem with findMany/findOne is still exists
 * This expression is not callable.
  Each member of the union type '(<TConfig extends DBQueryConfig<"many", true, ExtractTablesWithRelations<TSchema>, ExtractTablesWithRelations<TSchema>[string]>>(config?: KnownKeysOnly<...> | undefined) => PgRelationalQuery<...>) | (<TConfig extends DBQueryConfig<...>>(config?: KnownKeysOnly<...> | undefined) => PgRelationalQuery<...>) | (<TConfig ...' has signatures, but none of those signatures are compatible with each other.ts(2349)
 * https://discord.com/channels/1043890932593987624/1196401298354999306/1229109745432920064
  * https://www.answeroverflow.com/m/1141691075766005832
  *
  * Because of that I will create services for each model.
  * 
 */
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

interface IServiceParams<TSchema extends Record<string, unknown>>
  extends IBaseServiceParams<TSchema> {
  model: keyof TSchema;
}

export interface IBaseServiceParams<TSchema extends Record<string, unknown>> {
  schema: TSchema;
  db: PostgresJsDatabase<TSchema>;
  // config: IRelationConfig<RelationsConfig>;
  config: any;
  Table: PgTableWithColumns<any>;
}

export async function service<TSchema extends Record<string, unknown>>(
  params: IServiceParams<TSchema>,
) {
  const { db, config, model, Table, schema } = params;

  const populatedEntity =
    await db.query[model as keyof typeof schema].findMany();

  return populatedEntity;
}
