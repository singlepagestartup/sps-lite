import {
  timestamp,
  text,
  uuid,
  pgTableCreator,
  pgEnum,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `sps_website_builder_${name}`);

export const VariantEnumTable = pgEnum(`sps_website_builder_layouts_variant`, [
  "boxed",
  "wide",
]);

export const Table = pgTable("layouts", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull().default("Layout"),
  variant: VariantEnumTable("variant").notNull().default("wide"),
  className: text("class_name"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
