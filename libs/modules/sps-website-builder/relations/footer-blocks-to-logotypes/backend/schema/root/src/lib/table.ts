import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as FooterBlock } from "@sps/sps-website-builder-models-footer-block-backend-schema-table";

import { Table as Logotype } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

export const schemaName = "SPSWBFooterBlocksToLogotypes";
export const modelName = "footerBlocksToLogotypes";

const moduleName = "sps_w_b";
const table = "fr_bs_to_ls_pbe";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  footerBlockId: pgCore
    .uuid("fk_id")
    .notNull()
    .references(() => FooterBlock.id, { onDelete: "cascade" }),

  logotypeId: pgCore
    .uuid("le_id")
    .notNull()
    .references(() => Logotype.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
