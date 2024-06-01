import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Identity } from "@sps/sps-rbac-models-identity-backend-schema-table";

export const schemaName = "SPSRUsersToIdentities";
export const modelName = "usersToIdentities";

const moduleName = "sps_r";
const table = "us_to_is_a7k";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(
  table,
  {
    id: pgCore.uuid("id").primaryKey().defaultRandom(),
    variant: pgCore.text("variant").notNull().default("default"),
    orderIndex: pgCore.integer("order_index").notNull().default(0),
    className: pgCore.text("class_name"),
    userId: pgCore
      .uuid("ur_id")
      .notNull()
      .references(() => User.id, { onDelete: "cascade" }),

    identityId: pgCore
      .uuid("iy_id")
      .notNull()
      .references(() => Identity.id, { onDelete: "cascade" }),
  },
  () => {
    return {
      pk: pgCore.primaryKey({
        columns: [Identity.provider, Identity.account, Identity.email, User.id],
      }),
    };
  },
);

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
