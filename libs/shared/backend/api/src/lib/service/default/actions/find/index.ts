import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export async function action(props: {
  db: PostgresJsDatabase<any>;
  schemaName: keyof typeof props.db._.fullSchema;
}) {
  const result = await props.db.query[props.schemaName].findMany();

  return result;
}
