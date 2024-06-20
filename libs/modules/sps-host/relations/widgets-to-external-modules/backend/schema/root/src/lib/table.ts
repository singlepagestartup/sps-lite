import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-host/models/widget/backend/schema/table";

export const schemaName = "SPSHWidgetsToExternalModules";
export const modelName = "widgetsToExternalModules";

const moduleName = "sps_h";
const table = "ws_to_el_ms_1g0";

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
  externalModule: pgCore
    .text("external_module")
    .notNull()
    .default("sps-website-builder"),
  externalModuleProps: pgCore
    .text("external_module_props")
    .notNull()
    .default(""),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
