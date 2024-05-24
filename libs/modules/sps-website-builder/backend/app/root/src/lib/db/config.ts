import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import path from "path";
import { cwd } from "process";

const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
console.log(`🚀 ~ migrationsFolder:`, migrationsFolder);
const out = path.resolve(cwd(), __dirname, "./migrations");
console.log(`🚀 ~ out:`, out);
const modulesSchemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];
console.log(`🚀 ~ modulesSchemaPaths:`, modulesSchemaPaths);

const config = defineConfig({
  schema: modulesSchemaPaths,
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
}) satisfies Config;
export default config;
