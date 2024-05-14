import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { fields } from "./fields";
import { variants } from "./variants";

export const modelName = "SPSWBFeature";

const moduleName = "sps_w_b";
const table = "feature";

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
