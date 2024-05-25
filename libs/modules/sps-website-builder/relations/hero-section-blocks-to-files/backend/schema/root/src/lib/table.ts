import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";

export const schemaName = "SPSWBHeroSectionBlocksToFiles";
export const modelName = "heroSectionBlocksToFiles";

const moduleName = "sps_w_b";
const table = "ho_sn_bs_to_fs_y4o";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  heroSectionBlockId: pgCore
    .uuid("hk_id")
    .notNull()
    .references(() => HeroSectionBlock.id, { onDelete: "cascade" }),
  fileId: pgCore.uuid("fe_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
