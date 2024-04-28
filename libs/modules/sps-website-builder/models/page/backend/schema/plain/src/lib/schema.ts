import { serial, timestamp, pgTable } from "drizzle-orm/pg-core";

export const schema = pgTable("pages", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
