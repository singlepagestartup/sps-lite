import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Footer } from "@sps/sps-website-builder-models-footer-backend-schema-table";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const modelName = "SPSWBFootersToWidgets";

const moduleName = "sps_w_b";
const table = "fs_to_ws";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  footerId: pgCore
    .uuid("fr_id")
    .notNull()
    .references(() => Footer.id, { onDelete: "cascade" }),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);