import * as pgCore from "drizzle-orm/pg-core";
import { Table as Invoice } from "@sps/sps-billing/models/invoice/backend/repository/database";
import { Table as Currency } from "@sps/sps-billing/models/currency/backend/repository/database";

export const moduleName = "sps_bg";
export const table = "is_to_cs_cg0";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  invoiceId: pgCore
    .uuid("ie_id")
    .notNull()
    .references(() => Invoice.id, { onDelete: "cascade" }),
  currencyId: pgCore
    .uuid("cy_id")
    .notNull()
    .references(() => Currency.id, { onDelete: "cascade" }),
});
