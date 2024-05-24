import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";

import { Table as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-backend-schema-table";

export const schemaName = "SPSWBNavbarBlocksToButtonsArrays";
export const modelName = "navbarBlocksToButtonsArrays";

const moduleName = "sps_w_b";
const table = "nr_bs_to_bs_as_njg";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  direction: pgCore.text("direction").notNull().default("default"),
  navbarBlockId: pgCore
    .uuid("nk_id")
    .notNull()
    .references(() => NavbarBlock.id, { onDelete: "cascade" }),

  buttonsArrayId: pgCore
    .uuid("by_id")
    .notNull()
    .references(() => ButtonsArray.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
