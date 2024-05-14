import { sql } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export async function selectAllTables({ db }: { db: PostgresJsDatabase<any> }) {
  const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE';
    `;

  const tables = await db.execute(query);

  return tables;
}
