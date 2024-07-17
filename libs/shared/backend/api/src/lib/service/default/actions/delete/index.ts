import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";

export async function action(props: {
  id: string;
  db: PostgresJsDatabase<any>;
  Table: PgTableWithColumns<any>;
}) {
  const { id } = props;

  const [entity] = await props.db
    .delete(props.Table)
    .where(eq(props.Table.id, id))
    .returning();

  return entity;
}
