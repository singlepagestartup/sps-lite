import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as HeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/backend/schema/table";

import { Table as ButtonsArray } from "@sps/sps-website-builder/models/buttons-array/backend/schema/table";

export const schemaName = "SPSWBHeroSectionBlocksToButtonsArrays";
export const modelName = "heroSectionBlocksToButtonsArrays";

const moduleName = "sps_w_b";
const table = "ho_sn_bs_to_bs_as_pmd";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  heroSectionBlockId: pgCore
    .uuid("hk_id")
    .notNull()
    .references(() => HeroSectionBlock.id, { onDelete: "cascade" }),

  buttonsArrayId: pgCore
    .uuid("by_id")
    .notNull()
    .references(() => ButtonsArray.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
