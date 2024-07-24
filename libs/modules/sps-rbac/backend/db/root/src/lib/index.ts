import "reflect-metadata";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";
import { injectable } from "inversify";

export const db = drizzle(postgres, { schema: drizzleSchema });
export const schema = drizzleSchema;

@injectable()
export class Database {
  db: PostgresJsDatabase<any>;
  schema: typeof drizzleSchema;

  constructor() {
    this.db = db;
    this.schema = schema;
  }
}
