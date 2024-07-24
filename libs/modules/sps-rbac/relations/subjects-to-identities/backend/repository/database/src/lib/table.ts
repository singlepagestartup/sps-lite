import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Subject } from "@sps/sps-rbac/models/subject/backend/repository/database";

import { Table as Identity } from "@sps/sps-rbac/models/identity/backend/repository/database";

export const schemaName = "SPSRSubjectsToIdentities";
export const modelName = "subjectsToIdentities";

const moduleName = "sps_r";
const table = "ss_to_is_h58";

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

  identityId: pgCore
    .uuid("iy_id")
    .notNull()
    .references(() => Identity.id, { onDelete: "cascade" }),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
export const dataDirectory = `${__dirname}/data`;
