import { defineConfig } from "drizzle-kit";
import { DATABASE_OPTIONS } from "../utils/envs";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: DATABASE_OPTIONS,
  verbose: true,
  strict: true,
});
