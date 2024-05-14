import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const modelName = "SPSWBPagesToWidgets";

const moduleName = "sps_w_b";
const table = "ps_to_ws";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  pageId: pgCore
    .uuid("pe_id")
    .notNull()
    .references(() => Page.id, { onDelete: "cascade" }),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);