import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";

export const modelName = "SPSWBPagesToLayouts";

const moduleName = "sps_w_b";
const table = "ps_to_ls";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  pageId: pgCore
    .uuid("pe_id")
    .notNull()
    .references(() => Page.id, { onDelete: "cascade" }),
  layoutId: pgCore
    .uuid("lt_id")
    .notNull()
    .references(() => Layout.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
