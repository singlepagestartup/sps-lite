import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as HeroSectionBlock } from "@sps/sps-website-builder/models/hero-section-block/backend/repository/database";

export const schemaName = "SPSWBHeroSectionBlocksToSpsFileStorageWidgets";
export const modelName = "heroSectionBlocksToSpsFileStorageWidgets";

const moduleName = "sps_w_b";
const table = "ho_sn_bs_to_ss_fe_se_ws_a0n";

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
  spsFileStorageModuleWidgetId: pgCore.uuid("sps_fe_se_wt_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
export const dataDirectory = `${__dirname}/data`;
