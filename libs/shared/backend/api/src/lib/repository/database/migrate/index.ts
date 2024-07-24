import "reflect-metadata";
import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config as DrizzleConfig, defineConfig } from "drizzle-kit";
import path from "path";
import { cwd } from "process";

export class Migrate {
  out: string;
  schemaPaths: string[];
  drizzleConfig: DrizzleConfig;

  constructor() {
    const modulesSchemaPaths = [path.resolve(cwd(), __dirname, "./schema.ts")];

    this.out = "./src/lib/migrations2";
    this.schemaPaths = modulesSchemaPaths;
  }

  init() {
    this.drizzleConfig = defineConfig({
      schema: this.schemaPaths,
      out: this.out,
      dialect: "postgresql",
      dbCredentials: DATABASE_OPTIONS,
      verbose: true,
      strict: true,
    }) satisfies DrizzleConfig;
  }

  config() {
    this.init();

    return this.drizzleConfig;
  }
}
