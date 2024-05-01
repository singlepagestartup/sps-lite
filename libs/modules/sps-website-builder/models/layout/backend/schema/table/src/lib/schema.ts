import pgCore from "drizzle-orm/pg-core";

const moduleNameSnakeCased = "sps_website_builder";
const modelNameSnakeCasedPluralized = "layouts";

const pgTable = pgCore.pgTableCreator(
  (name) => `${moduleNameSnakeCased}_${name}`,
);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleNameSnakeCased}_${modelNameSnakeCasedPluralized}_variant`,
  ["boxed", "wide"],
);

export const Table = pgTable("layouts", {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  title: pgCore.text("title").notNull().default("Layout"),
  variant: VariantEnumTable("variant").notNull().default("wide"),
  className: pgCore.text("class_name"),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
});
