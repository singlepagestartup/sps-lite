import * as pgCore from "drizzle-orm/pg-core";
import { Table as Widget } from "@sps/sps-rbac/models/widget/backend/repository/database";
import { Table as AuthenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/repository/database";

export const moduleName = "sps_r";
export const table = "ws_to_an_bs_7t6";

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
  authenticationBlockId: pgCore
    .uuid("ak_id")
    .notNull()
    .references(() => AuthenticationBlock.id, { onDelete: "cascade" }),
});
