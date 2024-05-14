import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as FeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";

export const modelName = "SPSWBWTFSB";

const moduleName = "sps_w_b";
const table = "ws_to_fs_sn_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  widgetId: pgCore
    .uuid("wt_id")
    .notNull()
    .references(() => Widget.id, { onDelete: "cascade" }),
  featuresSectionBlockId: pgCore
    .uuid("fk_id")
    .notNull()
    .references(() => FeaturesSectionBlock.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);