import * as pgCore from "drizzle-orm/pg-core";

const moduleNameSnakeCased = "sps_website_builder";
const modelNameSnakeCasedPluralized = "slides";

const pgTable = pgCore.pgTableCreator(
  (name) => `${moduleNameSnakeCased}_${name}`,
);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleNameSnakeCased}_${modelNameSnakeCasedPluralized}_variant`,
  ["default"],
);

export const Table = pgTable(modelNameSnakeCasedPluralized, {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  variant: VariantEnumTable("variant").notNull().default("default"),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
});
