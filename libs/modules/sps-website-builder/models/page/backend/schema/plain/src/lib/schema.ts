import { timestamp, text, uuid, pgTableCreator } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sps_website_builder_${name}`);

export const Table = pgTable("pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").default("Page"),
  description: text("description").default("Description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
