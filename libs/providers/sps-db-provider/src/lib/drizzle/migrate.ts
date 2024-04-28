import { postgres } from "@sps/shared-backend-database-config";
import { MigrationConfig } from "drizzle-orm/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import fs from "fs";
import { cwd } from "process";

const db = drizzle(postgres);

export const migrate = async (props?: MigrationConfig) => {
  try {
    const { migrationsFolder = path.resolve(cwd(), "./src/db/migrations") } =
      props || {};

    await drizzleMigrator(db, { ...(props || {}), migrationsFolder });

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
