import "reflect-metadata";
import { DATABASE_OPTIONS } from "@sps/shared-utils";
import { Config as DrizzleConfig, defineConfig } from "drizzle-kit";
import { drizzle } from "drizzle-orm/postgres-js";
import { pg } from "../postgres";
import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import { sql } from "drizzle-orm";

export class Config {
  out: string;
  schemaPaths: string[];
  drizzleConfig: DrizzleConfig;
  migrationsTable: string;
  migrationsFolder: string;
  schema: any;

  constructor(props: {
    schemaPaths: string[];
    migrationsTable: string;
    migrationsFolder: string;
    schema: any;
  }) {
    this.out = "./src/lib/migrations";
    this.schemaPaths = props.schemaPaths;
    this.migrationsTable = props.migrationsTable;
    this.migrationsFolder = props.migrationsFolder;
    this.schema = props.schema;
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

  async migrate() {
    try {
      let beforeMigrations = [];

      const db = drizzle(pg, { schema: this.schema });

      try {
        beforeMigrations = await db.execute(
          sql`SELECT * FROM drizzle.sps_website_builder`,
        );
      } catch (error) {
        console.log(`migrate ~ error:`, error);
      }

      await drizzleMigrator(db, {
        migrationsFolder: this.migrationsFolder,
        migrationsTable: this.migrationsTable,
      });

      const afterMigrations = await db.execute(
        sql`SELECT * FROM drizzle.sps_website_builder`,
      );

      if (beforeMigrations.length !== afterMigrations.length) {
        console.log("NEW_MIGRATIONS=true");
      }

      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
