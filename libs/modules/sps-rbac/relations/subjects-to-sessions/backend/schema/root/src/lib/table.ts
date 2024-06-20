import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Subject } from "@sps/sps-rbac/models/subject/backend/schema/table";

import { Table as Session } from "@sps/sps-rbac/models/session/backend/schema/table";

export const schemaName = "SPSRSubjectsToSessions";
export const modelName = "subjectsToSessions";

const moduleName = "sps_r";
const table = "ss_to_ss_1eh";

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

  sessionId: pgCore
    .uuid("sn_id")
    .notNull()
    .references(() => Session.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
