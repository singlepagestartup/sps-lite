import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import path from "path";

const out = path.resolve(__dirname, "./migrations");
const modulesSchemaPaths = [path.resolve(__dirname, "./schema.ts")];

const config = defineConfig({
  schema: modulesSchemaPaths,
  out,
  dialect: "postgresql",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
}) satisfies Config;
export default config;
