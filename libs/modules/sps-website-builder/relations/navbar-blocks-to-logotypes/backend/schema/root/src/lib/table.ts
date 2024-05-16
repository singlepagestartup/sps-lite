import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";
import { Table as Logotype } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

export const schemaName = "SPSWBNavbarBlocksToLogotypes";
export const modelName = "navbarBlocksToLogotypes";

const moduleName = "sps_w_b";
const table = "nr_bs_to_ls";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  navbarBlockId: pgCore
    .uuid("nk_id")
    .notNull()
    .references(() => NavbarBlock.id, { onDelete: "cascade" }),
  logotypeId: pgCore
    .uuid("le_id")
    .notNull()
    .references(() => Logotype.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
