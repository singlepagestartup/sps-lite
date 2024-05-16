import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";
import { Table as Button } from "@sps/sps-website-builder-models-button-backend-schema-table";

export const schemaName = "SPSWBHeroSectionBlocksToButtons";
export const modelName = "heroSectionBlocksToButtons";

const moduleName = "sps_w_b";
const table = "ho_sn_bs_to_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  heroSectionBlockId: pgCore
    .uuid("hk_id")
    .notNull()
    .references(() => HeroSectionBlock.id, { onDelete: "cascade" }),
  buttonId: pgCore
    .uuid("bn_id")
    .notNull()
    .references(() => Button.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
