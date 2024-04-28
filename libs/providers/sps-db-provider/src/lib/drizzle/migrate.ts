import { postgres } from "@sps/shared-backend-database-config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate as drizzleMigrator } from "drizzle-orm/postgres-js/migrator";
import path from "path";

const db = drizzle(postgres);

export const migrate = async () => {
  try {
    await drizzleMigrator(db, {
      migrationsFolder: path.resolve(__dirname, "./migrations"),
    });

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
