import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const schemaName = "SPSWBWidgetsToSpsFileStorageModuleWidgets";
export const modelName = "widgetsToSpsFileStorageModuleWidgets";

const moduleName = "sps_w_b";
const table = "ws_to_ss_fe_se_me_ws_zb8";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  spsFileStorageModuleWidgetId: pgCore.uuid("sps_fe_se_me_wt_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
