import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";
import { variants } from "./variants";

export const model = "SPSWBLayout";

const module = "sps_w_b";
const table = "layouts";

const pgTable = pgCore.pgTableCreator((name) => `${module}_${name}`);

export const VariantEnumTable = pgCore.pgEnum(`${module}_${table}_variant`, [
  "default",
  ...variants,
]);

export const Table = pgTable("layouts", {
  ...fields,
  variant: VariantEnumTable("variant").notNull().default("default"),
});
