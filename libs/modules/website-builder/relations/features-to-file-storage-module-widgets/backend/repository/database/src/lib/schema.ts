import * as pgCore from "drizzle-orm/pg-core";
import { Table as Feature } from "@sps/website-builder/models/feature/backend/repository/database";
import { Table as FileStorageModuleWidget } from "@sps/file-storage/models/widget/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "fs_to_ss_fe_se_me_ws_idk";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  featureId: pgCore
    .uuid("fe_id")
    .notNull()
    .references(() => Feature.id, { onDelete: "cascade" }),
  fileStorageModuleWidgetId: pgCore
    .uuid("sps_fe_se_me_fe_id")
    .notNull()
    .references(() => FileStorageModuleWidget.id, { onDelete: "cascade" }),
});
