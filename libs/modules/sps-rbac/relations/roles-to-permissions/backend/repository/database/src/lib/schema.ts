import * as pgCore from "drizzle-orm/pg-core";
import { Table as Role } from "@sps/sps-rbac/models/role/backend/repository/database";
import { Table as Permission } from "@sps/sps-rbac/models/permission/backend/repository/database";

export const moduleName = "sps_rc";
export const table = "rs_to_ps_xbk";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  roleId: pgCore
    .uuid("re_id")
    .notNull()
    .references(() => Role.id, { onDelete: "cascade" }),

  permissionId: pgCore
    .uuid("pn_id")
    .notNull()
    .references(() => Permission.id, { onDelete: "cascade" }),
});
