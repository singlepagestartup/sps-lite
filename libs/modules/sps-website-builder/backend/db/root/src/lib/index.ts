import "reflect-metadata";
import { drizzle } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { MigrateConfig, postgres } from "@sps/shared-backend-database-config";
import path from "path";
import { cwd } from "process";

export const db = drizzle(postgres, { schema: drizzleSchema });
export const schema = drizzleSchema;

const schemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];
const config = new MigrateConfig({ schemaPaths }).config();

export default config;
