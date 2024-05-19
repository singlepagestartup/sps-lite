import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const schemaName = "SPSWBWidgetsToStartupModuleWidgets";
export const modelName = "widgetsToStartupModuleWidgets";

const moduleName = "sps_w_b";
const table = "ws_to_sp_me_ws_xy7";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  startupModuleWidgetId: pgCore.uuid("st_me_wt_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
