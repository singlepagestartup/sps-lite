import * as pgCore from "drizzle-orm/pg-core";
import { Table as Widget } from "@sps/sps-website-builder/models/widget/backend/repository/database";
import { Table as ContentBlock } from "@sps/sps-website-builder/models/content-block/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "ws_to_ct_bs";

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
  contentBlockId: pgCore
    .uuid("ct_bk_id")
    .notNull()
    .references(() => ContentBlock.id, { onDelete: "cascade" }),
});
