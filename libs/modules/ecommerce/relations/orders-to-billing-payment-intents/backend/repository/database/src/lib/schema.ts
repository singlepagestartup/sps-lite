import * as pgCore from "drizzle-orm/pg-core";
import { Table as Order } from "@sps/ecommerce/models/order/backend/repository/database";
import { Table as BillingPaymentIntent } from "@sps/billing/models/payment-intent/backend/repository/database";

export const moduleName = "sps_ee";
export const table = "os_to_bg_pt_is_c5f";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  orderId: pgCore
    .uuid("or_id")
    .notNull()
    .references(() => Order.id, { onDelete: "cascade" }),
  billingPaymentIntentId: pgCore
    .uuid("bg_pt_it_id")
    .notNull()
    .references(() => BillingPaymentIntent.id, { onDelete: "cascade" }),
});
