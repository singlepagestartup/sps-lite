import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ZodObject } from "zod";

export async function action(props: {
  data: any;
  db: PostgresJsDatabase<any>;
  insertSchema: ZodObject<any, any>;
  Table: PgTableWithColumns<any>;
  schemaName: keyof typeof props.db._.fullSchema;
}) {
  const { data } = props;

  const plainData = props.insertSchema.parse(data);

  const [entity] = await props.db
    .insert(props.Table)
    .values(plainData)
    .returning();

  return entity;
}
