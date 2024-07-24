import { MigrateConfig } from "@sps/shared-backend-database-config";
import path from "path";
import { cwd } from "process";

const schemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];
const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
export const moduleName = "sps_w_b";
export const table = "button";

export const migrate = new MigrateConfig({
  schemaPaths,
  migrationsFolder,
  migrationsTable: `${moduleName}_${table}`,
  schema: require("./schema"),
});

const config = migrate.config();

export default config;
