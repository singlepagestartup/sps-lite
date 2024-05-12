import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as Footer } from "@sps/sps-website-builder-models-footer-backend-schema-table";

export const modelName = "SPSWBLayoutsToFooters";

const moduleName = "sps_w_b";
const table = "ls_to_fs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  layoutId: pgCore
    .uuid("lt_id")
    .notNull()
    .references(() => Layout.id, { onDelete: "cascade" }),
  footerId: pgCore
    .uuid("fr_id")
    .notNull()
    .references(() => Footer.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
