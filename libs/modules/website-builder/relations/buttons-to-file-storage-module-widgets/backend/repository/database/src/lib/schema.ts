import * as pgCore from "drizzle-orm/pg-core";
import { Table as Button } from "@sps/website-builder/models/button/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "bs_to_ss_fe_se_me_ws_m3s";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  buttonId: pgCore
    .uuid("bn_id")
    .notNull()
    .references(() => Button.id, { onDelete: "cascade" }),
  spsFileStorageModuleWidgetId: pgCore.uuid("sps_fe_se_me_fe_id").notNull(),
});
