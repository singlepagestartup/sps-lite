import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Layout } from "@sps/sps-host-models-layout-backend-schema-table";

import { Table as Widget } from "@sps/sps-host-models-widget-backend-schema-table";

export const schemaName = "SPSHLayoutsToWidgets";
export const modelName = "layoutsToWidgets";

const moduleName = "sps_h";
const table = "ls_to_ws_v2d";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  layoutId: pgCore
    .uuid("lt_id")
    .notNull()
    .references(() => Layout.id, { onDelete: "cascade" }),

  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
