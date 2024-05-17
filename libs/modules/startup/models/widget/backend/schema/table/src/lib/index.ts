import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { fields } from "./fields";

export const schemaName = "SWidget";
export const modelName = "widget";

const moduleName = "s";
const table = "widget";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  ...fields,
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
