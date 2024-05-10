import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import { schemaPath } from "@sps/sps-db-provider";

const out = "./src/db/migrations";

const config = defineConfig({
  schema: schemaPath,
  out,
  driver: "pg",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
}) satisfies Config;
export default config;
