import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import { db } from "./index";
import { cwd } from "process";
import { sql } from "drizzle-orm";

const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
const migrationsTable = "sps_rbac";

export const migrate = async () => {
  try {
    const beforeMigrations = await db.execute(
      sql`SELECT * FROM drizzle.sps_rbac`,
    );

    await drizzleMigrator(db, {
      migrationsFolder,
      migrationsTable,
    });

    const afterMigrations = await db.execute(
      sql`SELECT * FROM drizzle.sps_rbac`,
    );

    if (beforeMigrations.length !== afterMigrations.length) {
      console.log("NEW_MIGRATIONS=true");
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

migrate();
