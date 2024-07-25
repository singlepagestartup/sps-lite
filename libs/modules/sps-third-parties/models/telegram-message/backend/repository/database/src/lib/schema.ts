import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";

export const moduleName = "sps_t_p";
export const table = "tm_me_3ug";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  ...fields,
});
