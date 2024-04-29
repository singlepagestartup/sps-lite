import { drizzle } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";
import path from "path";

export { migrate } from "./migrate";
export { seed } from "./seed";
export { config } from "./config";
export const db = drizzle(postgres, { schema: drizzleSchema, logger: true });
export const schema = drizzleSchema;

const modulesSchemaPaths = [
  path.resolve(__dirname, "./schema.ts"),
  path.resolve(__dirname, "./sps-website-builder.ts"),
];

export const schemaPath = modulesSchemaPaths;
