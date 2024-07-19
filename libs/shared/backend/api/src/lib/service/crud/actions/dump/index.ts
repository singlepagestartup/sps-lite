import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Dumper } from "./Dumper";

export async function action(props: {
  db: PostgresJsDatabase<any>;
  schemaName: keyof typeof props.db._.fullSchema;
  Table: PgTableWithColumns<any>;
  seedsPath?: string;
}) {
  const dumper = new Dumper({
    ...props,
  });

  const dumpResult = await dumper.dump();
}
