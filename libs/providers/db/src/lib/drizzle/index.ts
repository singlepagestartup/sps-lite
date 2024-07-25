import { drizzle } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";
import path from "path";

export { migrate } from "./migrate";
export { seed } from "./seed";
export { drop } from "./drop";
export const db = drizzle(postgres, { schema: drizzleSchema });
export const schema = drizzleSchema;

const modulesSchemaPaths = [
  path.resolve(__dirname, "./schema.ts"),
  path.resolve(__dirname, "./sps-file-storage.ts"),
  path.resolve(__dirname, "./sps-notification.ts"),
  path.resolve(__dirname, "./sps-third-parties.ts"),
  path.resolve(__dirname, "./startup.ts"),
];

export const schemaPath = modulesSchemaPaths;
