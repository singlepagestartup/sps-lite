import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";
import { Table as Button } from "@sps/sps-website-builder-models-button-backend-schema-table";

export const modelName = "SPSWBNavbarBlocksToButtons";

const moduleName = "sps_w_b";
const table = "nr_bs_to_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  place: pgCore.text("place").default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  navbarBlockId: pgCore
    .uuid("nk_id")
    .notNull()
    .references(() => NavbarBlock.id, { onDelete: "cascade" }),
  buttonId: pgCore
    .uuid("bn_id")
    .notNull()
    .references(() => Button.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
