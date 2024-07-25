import * as pgCore from "drizzle-orm/pg-core";
import { Table as Widget } from "@sps/sps-website-builder/models/widget/backend/repository/database";
import { Table as FeaturesSectionBlock } from "@sps/sps-website-builder/models/features-section-block/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "ws_to_fs_sn_bs";

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
  featuresSectionBlockId: pgCore
    .uuid("fk_id")
    .notNull()
    .references(() => FeaturesSectionBlock.id, { onDelete: "cascade" }),
});
