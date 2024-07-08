import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { Table as Channel } from "@sps/sps-broadcast/models/channel/backend/schema/table";

import { Table as Message } from "@sps/sps-broadcast/models/message/backend/schema/table";

export const schemaName = "SPSBChannelsToMessages";
export const modelName = "channelsToMessages";

const moduleName = "sps_b";
const table = "cs_to_ms_34z";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: pgCore.text("variant").notNull().default("default"),
  orderIndex: pgCore.integer("order_index").notNull().default(0),
  className: pgCore.text("class_name"),
  channelId: pgCore
    .uuid("cl_id")
    .notNull()
    .references(() => Channel.id, { onDelete: "cascade" }),
  messageId: pgCore
    .uuid("me_id")
    .notNull()
    .references(() => Message.id, { onDelete: "cascade" }),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
