import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import path from "path";

export default defineConfig({
  schema: path.resolve(__dirname, "./schema.ts"),
  out: path.resolve(__dirname, "./migrations"),
  driver: "pg",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
}) satisfies Config;
