import * as pgCore from "drizzle-orm/pg-core";
import { Table as Article } from "@sps/blog/models/article/backend/repository/database";
import { Table as FileStorageModuleWidget } from "@sps/file-storage/models/widget/backend/repository/database";

export const moduleName = "sps_blog";
export const table = "as_to_fe_se_me_wt_d24";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  articleId: pgCore
    .uuid("ae_id")
    .notNull()
    .references(() => Article.id, { onDelete: "cascade" }),
  fileStorageModuleWidgetId: pgCore
    .uuid("fe_se_me_wt_id")
    .notNull()
    .references(() => FileStorageModuleWidget.id, { onDelete: "cascade" }),
});
