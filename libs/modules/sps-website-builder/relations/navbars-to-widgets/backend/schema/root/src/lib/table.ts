import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Navbar } from "@sps/sps-website-builder/models/navbar/backend/schema/table";
import { Table as Widget } from "@sps/sps-website-builder/models/widget/backend/schema/table";

export const schemaName = "SPSWBNavbarsToWidgets";
export const modelName = "navbarsToWidgets";

const moduleName = "sps_w_b";
const table = "ns_to_ws";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  navbarId: pgCore
    .uuid("nr_id")
    .notNull()
    .references(() => Navbar.id, { onDelete: "cascade" }),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
