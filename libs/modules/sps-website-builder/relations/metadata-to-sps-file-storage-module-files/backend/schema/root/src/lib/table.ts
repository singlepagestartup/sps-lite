import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Metadata } from "@sps/sps-website-builder-models-metadata-backend-schema-table";

export const schemaName = "SPSWBMetadataToSpsFileStorageModuleFiles";
export const modelName = "metadataToSpsFileStorageModuleFiles";

const moduleName = "sps_w_b";
const table = "ma_to_ss_fe_se_me_fs_8k7";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  type: pgCore.text("type").default("opengraph_image"),
  metadataId: pgCore
    .uuid("ma_id")
    .notNull()
    .references(() => Metadata.id, { onDelete: "cascade" }),
  spsFileStorageModuleFileId: pgCore.uuid("sps_fe_se_me_fe_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
