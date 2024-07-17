import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { IModuleSeedConfig, Seeder } from "./Seeder";
import { ZodObject } from "zod";

export async function action(props: {
  db: PostgresJsDatabase<any>;
  schemaName: keyof typeof props.db._.fullSchema;
  Table: PgTableWithColumns<any>;
  seedsPath?: string;
  insertSchema: ZodObject<any, any>;
  seedResults?: any;
  seedConfig: {
    [key: string]: IModuleSeedConfig<any>;
  };
}) {
  const seeder = new Seeder(props);

  const seedResult = await seeder.seed({
    seedResults: props.seedResults,
    seedConfig: props.seedConfig,
  });
}
