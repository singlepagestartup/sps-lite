import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";

export const modelName = "SPSWBWidgetsToHeroSectionBlocks";

const moduleName = "spswb";
// const table = "widgets_to_hero_section_blocks";
const table = "wstohosnbs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  widgetId: pgCore
    .uuid("widget_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  heroSectionBlockId: pgCore
    .uuid("hosnbkid")
    .notNull()
    .references(() => HeroSectionBlock.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
