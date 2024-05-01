import { postgres } from "@sps/shared-backend-database-config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";

const db = drizzle(postgres);

export const drop = async () => {
  try {
    console.log("Dropping database");
    const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE';
    `;

    const tables = await db.execute(query);

    for (const table of tables) {
      const truncateQuery = sql.raw(
        `TRUNCATE TABLE ${table["table_name"]} CASCADE;`,
      );
      await db.execute(truncateQuery);

      const dropQuery = sql.raw(
        `DROP TABLE if exists ${table["table_name"]} CASCADE;`,
      );
      await db.execute(dropQuery);
    }

    console.log("Migration successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
