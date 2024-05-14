import { sql } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { selectAllTables } from "./select-all-tables";

export async function clearDataInTables({
  db,
}: {
  db: PostgresJsDatabase<any>;
}) {
  const tables = await selectAllTables({ db });

  for (const table of tables) {
    const truncateQuery = sql.raw(
      `TRUNCATE TABLE ${table["table_name"]} CASCADE;`,
    );
    await db.execute(truncateQuery);
  }
}
