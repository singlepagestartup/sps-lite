import * as pgCore from "drizzle-orm/pg-core";
import { Table as NavbarBlock } from "@sps/sps-website-builder/models/navbar-block/backend/repository/database";
import { Table as Logotype } from "@sps/sps-website-builder/models/logotype/backend/repository/database";

export const moduleName = "sps_w_b";
export const table = "nr_bs_to_ls";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  navbarBlockId: pgCore
    .uuid("nk_id")
    .notNull()
    .references(() => NavbarBlock.id, { onDelete: "cascade" }),
  logotypeId: pgCore
    .uuid("le_id")
    .notNull()
    .references(() => Logotype.id, { onDelete: "cascade" }),
});
