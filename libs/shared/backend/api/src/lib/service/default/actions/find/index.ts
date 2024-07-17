import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export async function action(
  db: PostgresJsDatabase<any>,
  schemaName: keyof typeof db._.fullSchema,
) {
  const result = await db.query[schemaName].findMany();

  return result;
}
