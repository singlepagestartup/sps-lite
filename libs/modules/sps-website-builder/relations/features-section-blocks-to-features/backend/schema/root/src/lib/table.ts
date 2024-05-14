import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as FeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";
import { Table as Feature } from "@sps/sps-website-builder-models-feature-backend-schema-table";

export const modelName = "SPSWBFeaturesSectionBlocksToFeatures";

const moduleName = "sps_w_b";
const table = "fs_sn_bs_to_fs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  featuresSectionBlockId: pgCore
    .uuid("fk_id")
    .notNull()
    .references(() => FeaturesSectionBlock.id, { onDelete: "cascade" }),
  featureId: pgCore
    .uuid("fe_id")
    .notNull()
    .references(() => Feature.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
