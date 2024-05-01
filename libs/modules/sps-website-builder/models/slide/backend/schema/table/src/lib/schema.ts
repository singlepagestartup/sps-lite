import { serial, timestamp, pgTableCreator, text } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sps_website_builder_${name}`);

export const Table = pgTable("slides", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
