import {
  timestamp,
  text,
  uuid,
  pgTableCreator,
  pgEnum,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sps_website_builder_${name}`);

export const VariantEnumTable = pgEnum("sps_website_builder_pages_variant", [
  "kudda",
  "misd",
]);

export const Table = pgTable("pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull().default("Page"),
  url: text("url").notNull().default("/"),
  variant: VariantEnumTable("variant").notNull().default("kudda"),
  description: text("description").default("Description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
