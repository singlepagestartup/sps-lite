import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { fields } from "./fields";
import { variants } from "./variants";

export const modelName = "SPSFSFile";

const moduleName = "sps_f_s";
const table = "file";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleName}_${table}_variant`,
  ["default", ...variants],
);

export const Table = pgTable(table, {
  ...fields,
  variant: VariantEnumTable("variant").notNull().default("default"),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
