import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ZodObject } from "zod";
import { eq } from "drizzle-orm";

export async function action(props: {
  id: string;
  data: any;
  db: PostgresJsDatabase<any>;
  insertSchema: ZodObject<any, any>;
  Table: PgTableWithColumns<any>;
  schemaName: keyof typeof props.db._.fullSchema;
}) {
  const { id, data } = props;

  const plainData = props.insertSchema.parse(data);

  if (Object.keys(plainData).length) {
    const [entity] = await props.db
      .update(props.Table)
      .set(plainData)
      .where(eq(props.Table.id, id))
      .returning();

    return entity;
  }

  return {};
}
