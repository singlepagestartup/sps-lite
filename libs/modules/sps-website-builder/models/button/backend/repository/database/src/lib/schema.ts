import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";
import { table, moduleName } from "./config";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  ...fields,
});
