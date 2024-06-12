import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Session } from "@sps/sps-rbac-models-session-backend-schema-table";

import { Table as Authentication } from "@sps/sps-rbac-models-authentication-backend-schema-table";

export const schemaName = "SPSRSessionsToAuthentications";
export const modelName = "sessionsToAuthentications";

const moduleName = "sps_r";
const table = "ss_to_as_2il";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  sessionId: pgCore
    .uuid("sn_id")
    .notNull()
    .references(() => Session.id, { onDelete: "cascade" }),

  authenticationId: pgCore
    .uuid("an_id")
    .notNull()
    .references(() => Authentication.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
