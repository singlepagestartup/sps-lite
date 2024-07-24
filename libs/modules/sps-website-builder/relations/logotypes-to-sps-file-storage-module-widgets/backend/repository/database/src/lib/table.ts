import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Logotype } from "@sps/sps-website-builder/models/logotype/backend/repository/database";

export const schemaName = "SPSWBLogotypesToSpsFileStorageWidgets";
export const modelName = "logotypesToSpsFileStorageWidgets";

const moduleName = "sps_w_b";
const table = "ls_to_ss_fe_se_ws_uas";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  logotypeId: pgCore
    .uuid("le_id")
    .notNull()
    .references(() => Logotype.id, { onDelete: "cascade" }),
  spsFileStorageModuleWidgetId: pgCore.uuid("sps_fe_se_wt_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
