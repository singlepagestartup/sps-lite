import * as pgCore from "drizzle-orm/pg-core";
import { Table as Subject } from "@sps/rbac/models/subject/backend/repository/database";
import { Table as Order } from "@sps/ecommerce/models/order/backend/repository/database";

export const moduleName = "sps_rc";
export const table = "ss_to_ee_os_ov2";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  subjectId: pgCore
    .uuid("st_id")
    .notNull()
    .references(() => Subject.id, { onDelete: "cascade" }),
  ecommerceOrderId: pgCore
    .uuid("ee_or_id")
    .notNull()
    .references(() => Order.id, { onDelete: "cascade" }),
});
