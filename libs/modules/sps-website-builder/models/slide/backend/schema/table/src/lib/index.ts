import * as pgCore from "drizzle-orm/pg-core";
import { fields } from "./fields";
import { variants } from "./variants";

const moduleNameSnakeCased = "sps_website_builder";
const modelNameSnakeCasedPluralized = "slides";

const pgTable = pgCore.pgTableCreator(
  (name) => `${moduleNameSnakeCased}_${name}`,
);

export const VariantEnumTable = pgCore.pgEnum(
  `${moduleNameSnakeCased}_${modelNameSnakeCasedPluralized}_variant`,
  ["default", ...variants],
);

export const Table = pgTable(modelNameSnakeCasedPluralized, {
  ...fields,
  variant: VariantEnumTable("variant").notNull().default("default"),
});
