import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as Navbar } from "@sps/sps-website-builder-models-navbar-backend-schema-table";

export const modelName = "SPSWBLayoutsToNavbars";

const moduleName = "sps_w_b";
const table = "ls_to_ns";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  layoutId: pgCore
    .uuid("lt_id")
    .notNull()
    .references(() => Layout.id, { onDelete: "cascade" }),
  navbarId: pgCore
    .uuid("nr_id")
    .notNull()
    .references(() => Navbar.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
