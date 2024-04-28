import { timestamp, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const Table = pgTable("layouts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").default("Layout"),
  description: text("description").default("Description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
