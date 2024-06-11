import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import { db } from "./index";
import { cwd } from "process";

const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
const migrationsTable = "startup";

export const migrate = async () => {
  try {
    await drizzleMigrator(db, {
      migrationsFolder,
      migrationsTable,
    });

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

migrate();
