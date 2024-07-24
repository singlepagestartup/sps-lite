import "reflect-metadata";
import { MigrateConfig } from "@sps/shared-backend-database-config";
import path from "path";
import { cwd } from "process";

const schemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];
const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
const migrationsTable = "sps_rbac";

export const migrate = new MigrateConfig({
  schemaPaths,
  migrationsFolder,
  migrationsTable,
  schema: require("./schema"),
});

const config = migrate.config();

export const schema = require("./schema");

export default config;
