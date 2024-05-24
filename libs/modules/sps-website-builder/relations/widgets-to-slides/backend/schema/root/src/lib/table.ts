import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";

export const schemaName = "SPSWBWidgetsToSlides";
export const modelName = "widgetsToSlides";

const moduleName = "sps_w_b";
const table = "ws_to_ss_3bx";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  direction: pgCore.text("direction").notNull().default("default"),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),

  slideId: pgCore
    .uuid("se_id")
    .notNull()
    .references(() => Slide.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
