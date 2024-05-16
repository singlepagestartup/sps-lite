import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Logotype } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

export const schemaName = "SPSWBLogotypesToFiles";
export const modelName = "logotypesToFiles";

const moduleName = "sps_w_b";
const table = "ls_to_fs_e2j";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  logotypeId: pgCore
    .uuid("le_id")
    .notNull()
    .references(() => Logotype.id, { onDelete: "cascade" }),
  fileId: pgCore.uuid("fe_id").notNull(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
