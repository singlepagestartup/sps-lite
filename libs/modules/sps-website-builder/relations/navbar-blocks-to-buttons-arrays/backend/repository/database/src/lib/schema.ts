import * as pgCore from "drizzle-orm/pg-core";
import { Table as NavbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/repository/database";
import { Table as ButtonsArray } from "@sps/sps-website-builder/models/buttons-array/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "nr_bs_to_bs_as_njg";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  position: pgCore.text("position").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  navbarBlockId: pgCore
    .uuid("nk_id")
    .notNull()
    .references(() => NavbarBlock.id, { onDelete: "cascade" }),

  buttonsArrayId: pgCore
    .uuid("by_id")
    .notNull()
    .references(() => ButtonsArray.id, { onDelete: "cascade" }),
});
