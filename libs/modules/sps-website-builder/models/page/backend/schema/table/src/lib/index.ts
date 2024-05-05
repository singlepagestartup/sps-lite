import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";
import { variants } from "./variants";

export const model = "SPSWBPage";

const module = "sps_w_b";
const table = "pages";

const pgTable = pgCore.pgTableCreator((name) => `${module}_${name}`);

export const VariantEnumTable = pgCore.pgEnum(`${module}_${table}_variant`, [
  "default",
  ...variants,
]);

export const Table = pgTable(table, {
  ...fields,
  variant: VariantEnumTable("variant").notNull().default("default"),
});
