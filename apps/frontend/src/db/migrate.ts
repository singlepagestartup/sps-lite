import { postgres } from "@sps/shared-backend-database-config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const db = drizzle(postgres);

const main = async () => {
  try {
    await migrate(db, {
      migrationsFolder: "./src/db/migrations",
    });

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
