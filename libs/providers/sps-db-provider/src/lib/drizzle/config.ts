import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config, defineConfig } from "drizzle-kit";
import path from "path";
import { cwd } from "process";

export const config = (props?: { schema: string; out: string }) => {
  const {
    schema = path.resolve(__dirname, "./schema.ts"),
    out = path.resolve(cwd(), "src/db/migrations"),
  } = props || {};

  return defineConfig({
    schema,
    out,
    driver: "pg",
    dbCredentials: DATABASE_OPTIONS,
    verbose: true,
    strict: true,
  }) satisfies Config;
};
