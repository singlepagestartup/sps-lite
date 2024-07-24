import "reflect-metadata";
import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config as DrizzleConfig, defineConfig } from "drizzle-kit";

export class Config {
  out: string;
  schemaPaths: string[];
  drizzleConfig: DrizzleConfig;

  constructor(props: { schemaPaths: string[] }) {
    this.out = "./src/lib/migrations";
    this.schemaPaths = props.schemaPaths;
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
