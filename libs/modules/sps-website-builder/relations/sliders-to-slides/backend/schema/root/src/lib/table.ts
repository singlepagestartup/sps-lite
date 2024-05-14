import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Slider } from "@sps/sps-website-builder-models-slider-backend-schema-table";
import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";

export const modelName = "SPSWBSlidersToSlides";

const moduleName = "sps_w_b";
const table = "ss_to_ss";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  sliderId: pgCore
    .uuid("sr_id")
    .notNull()
    .references(() => Slider.id, { onDelete: "cascade" }),
  slideId: pgCore
    .uuid("se_id")
    .notNull()
    .references(() => Slide.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);