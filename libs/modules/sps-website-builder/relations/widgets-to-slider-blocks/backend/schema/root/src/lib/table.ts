import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as SliderBlock } from "@sps/sps-website-builder-models-slider-block-backend-schema-table";

export const modelName = "SPSWBWidgetsToSliderBlocks";

const moduleName = "sps_w_b";
const table = "ws_to_sr_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
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
