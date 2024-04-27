import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { pg } from "./index";

const db = drizzle(pg);

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
