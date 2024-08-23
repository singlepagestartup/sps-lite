import * as pgCore from "drizzle-orm/pg-core";
import { Table as Widget } from "@sps/crm/models/widget/backend/repository/database";
import { Table as RequestBlock } from "@sps/crm/models/request-block/backend/repository/database";

export const moduleName = "sps_cm";
export const table = "ws_to_rt_bs_qd3";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  requestBlockId: pgCore
    .uuid("rt_bk_id")
    .notNull()
    .references(() => RequestBlock.id, { onDelete: "cascade" }),
});
