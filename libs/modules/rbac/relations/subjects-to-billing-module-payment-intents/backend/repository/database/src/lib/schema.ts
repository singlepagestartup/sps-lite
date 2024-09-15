import * as pgCore from "drizzle-orm/pg-core";
import { Table as Subject } from "@sps/rbac/models/subject/backend/repository/database";

export const moduleName = "sps_rc";
export const table = "ss_to_bg_me_pt_is_fv3";

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
  billingModulePaymentIntentId: pgCore.uuid("bg_me_pt_it_id").notNull(),
});
