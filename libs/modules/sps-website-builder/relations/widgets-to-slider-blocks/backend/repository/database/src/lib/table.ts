import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder/models/widget/backend/repository/database";
import { Table as SliderBlock } from "@sps/sps-website-builder/models/slider-block/backend/repository/database";

export const schemaName = "SPSWBWidgetsToSliderBlocks";
export const modelName = "widgetsToSliderBlocks";

const moduleName = "sps_w_b";
const table = "ws_to_sr_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  sliderBlockId: pgCore
    .uuid("sk_id")
    .notNull()
    .references(() => SliderBlock.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
