import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Role } from "@sps/sps-rbac-models-role-backend-schema-table";

export const schemaName = "SPSRUsersToRoles";
export const modelName = "usersToRoles";

const moduleName = "sps_r";
const table = "us_to_rs_37t";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  userId: pgCore
    .uuid("ur_id")
    .notNull()
    .references(() => User.id, { onDelete: "cascade" }),

  roleId: pgCore
    .uuid("re_id")
    .notNull()
    .references(() => Role.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
