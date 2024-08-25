import * as pgCore from "drizzle-orm/pg-core";

export const fields = {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
  status: pgCore.text("status").notNull().default("new"),
  type: pgCore.text("type").notNull().default("text"),
  method: pgCore.text("method").notNull().default("email"),
  title: pgCore.text("title"),
  subtitle: pgCore.text("subtitle"),
  description: pgCore.text("description"),
  content: pgCore.text("content"),
  reciever: pgCore.text("reciever").notNull(),
  attachments: pgCore.text("attachments"),
};
