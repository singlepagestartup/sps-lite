import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import path from "path";
import { cwd } from "process";

const modulesSchemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];
const out = "./src/lib/migrations";

const config = defineConfig({
  schema: modulesSchemaPaths,
  out,
  dialect: "postgresql",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
}) satisfies Config;
export default config;
