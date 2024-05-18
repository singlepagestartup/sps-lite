import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const schemaName = "SPSWBWidgetsToModules";
export const modelName = "widgetsToModules";

const moduleName = "sps_w_b";
const table = "ws_to_ms_3ei";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  moduleName: pgCore.text("module_name").notNull(),
  moduleWidgetId: pgCore.uuid("module_widget_id"),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
