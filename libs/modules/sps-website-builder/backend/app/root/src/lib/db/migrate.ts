import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import path from "path";
import { db } from "@sps/sps-db-provider";
import { cwd } from "process";

// const migrationsFolder = path.resolve(__dirname, "./migrations");

const migrationsFolder = path.resolve(cwd(), __dirname, "./migrations");
console.log(`🚀 ~ migrationsFolder:`, migrationsFolder);

export const migrate = async () => {
  try {
    await drizzleMigrator(db, { migrationsFolder });

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

migrate();
