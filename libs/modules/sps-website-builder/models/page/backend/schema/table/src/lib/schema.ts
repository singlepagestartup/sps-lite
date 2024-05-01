import * as pgCore from "drizzle-orm/pg-core";

const moduleNameSnakeCased = "sps_website_builder";
const modelNameSnakeCasedPluralized = "pages";

const pgTable = pgCore.pgTableCreator(
  (name) => `${moduleNameSnakeCased}_${name}`,
);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleNameSnakeCased}_${modelNameSnakeCasedPluralized}_variant`,
  ["kudda", "misd"],
);

export const Table = pgTable(modelNameSnakeCasedPluralized, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  title: pgCore.text("title").notNull().default("Page"),
  url: pgCore.text("url").notNull().default("/"),
  variant: VariantEnumTable("variant").notNull().default("kudda"),
  description: pgCore.text("description").default("Description"),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
});
