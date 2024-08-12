import * as pgCore from "drizzle-orm/pg-core";
import { Table as Widget } from "@sps/sps-ecommerce/models/widget/backend/repository/database";
import { Table as ProductOverviewBlock } from "@sps/sps-ecommerce/models/product-overview-block/backend/repository/database";

export const moduleName = "sps_ee";
export const table = "ws_to_pt_ow_bs_b3c";

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
  productOverviewBlockId: pgCore
    .uuid("pt_ow_bk_id")
    .notNull()
    .references(() => ProductOverviewBlock.id, { onDelete: "cascade" }),
});
