import { timestamp, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const Table = pgTable("pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").default("Page"),
  description: text("description").default("Description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
