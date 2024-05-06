import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";
import { variants } from "./variants";

export const model = "SPSWBSlide";

const moduleName = "sps_w_b";
const table = "slides";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleName}_${table}_variant`,
  ["default", ...variants],
);

export const Table = pgTable(table, {
  ...fields,
  variant: VariantEnumTable("variant").notNull().default("default"),
});
