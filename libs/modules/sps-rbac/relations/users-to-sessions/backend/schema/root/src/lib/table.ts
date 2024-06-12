import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Session } from "@sps/sps-rbac-models-session-backend-schema-table";

export const schemaName = "SPSRUsersToSessions";
export const modelName = "usersToSessions";

const moduleName = "sps_r";
const table = "us_to_ss_0y5";

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

  sessionId: pgCore
    .uuid("sn_id")
    .notNull()
    .references(() => Session.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
