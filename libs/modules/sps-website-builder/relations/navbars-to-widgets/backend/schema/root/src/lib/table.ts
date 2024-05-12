import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Navbar } from "@sps/sps-website-builder-models-navbar-backend-schema-table";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

export const modelName = "SPSWBNavbarsToWidgets";

const moduleName = "sps_w_b";
const table = "navbars_to_widgets";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  navbarId: pgCore
    .uuid("navbar_id")
    .notNull()
    .references(() => Navbar.id, { onDelete: "cascade" }),
  widgetId: pgCore
    .uuid("widget_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
