import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Widget } from "@sps/sps-rbac/models/widget/backend/schema/table";

import { Table as AuthenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/schema/table";

export const schemaName = "SPSRWidgetsToAuthenticationBlocks";
export const modelName = "widgetsToAuthenticationBlocks";

const moduleName = "sps_r";
const table = "ws_to_an_bs_7t6";

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

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
