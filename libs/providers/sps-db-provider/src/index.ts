import {
  db as drizzleDb,
  schema as drizzleSchema,
  migrate as drizzleMigrate,
  seed as drizzleSeed,
  config as drizzleConfig,
  schemaPath as drizzleSchemaPath,
} from "./lib/drizzle";

export const db = drizzleDb;
export const schema = drizzleSchema;
export const migrate = drizzleMigrate;
export const seed = drizzleSeed;
export const config = drizzleConfig;
export const schemaPath = drizzleSchemaPath;
