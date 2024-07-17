import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export async function action(props: {
  id: string;
  db: PostgresJsDatabase<any>;
  Table: PgTableWithColumns<any>;
  schemaName: keyof typeof props.db._.fullSchema;
}) {
  const { id } = props;

  const result = await props.db.query[props.schemaName].findFirst({
    where: eq(props.Table.id, id),
  });

  if (!result) {
    return null;
  }

  return result;
}
