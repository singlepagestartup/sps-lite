import * as pgCore from "drizzle-orm/pg-core";

export const fields = {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
  type: pgCore.text("type").notNull().default("one_off"),
  title: pgCore.text("title").notNull(),
  description: pgCore.text("description").notNull(),
  shortDescription: pgCore.text("short_description").default(""),
};
