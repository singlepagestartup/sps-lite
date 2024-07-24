import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Feature } from "@sps/sps-website-builder/models/feature/backend/repository/database";

export const schemaName = "SPSWBFeaturesToSpsFileStorageModuleFiles";
export const modelName = "featuresToSpsFileStorageModuleFiles";

const moduleName = "sps_w_b";
const table = "fs_to_ss_fe_se_me_fs_idk";

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
  spsFileStorageModuleFileId: pgCore.uuid("sps_fe_se_me_fe_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
export const dataDirectory = `${__dirname}/data`;
