import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";

import { Table as Metadata } from "@sps/sps-website-builder-models-metadata-backend-schema-table";

export const schemaName = "SPSWBPagesToMetadata";
export const modelName = "pagesToMetadata";

const moduleName = "sps_w_b";
const table = "ps_to_ma_k31";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  pageId: pgCore
    .uuid("pe_id")
    .notNull()
    .references(() => Page.id, { onDelete: "cascade" }),

  metadataId: pgCore
    .uuid("ma_id")
    .notNull()
    .references(() => Metadata.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
