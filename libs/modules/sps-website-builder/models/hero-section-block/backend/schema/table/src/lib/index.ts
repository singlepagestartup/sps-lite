import * as pgCore from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const schemaName = "SPSWBHeroSectionBlock";
export const modelName = "heroSectionBlock";

const moduleName = "sps_w_b";
const table = "ho_sn_bs";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(table, {
  title: pgCore.text("title"),
  subTitle: pgCore.text("subtitle"),
  description: pgCore.text("description"),
  anchor: pgCore.text("anchor"),
  className: pgCore.text("class_name"),
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
});

export const insertSchema = createInsertSchema(Table);
export const selectSchema = createSelectSchema(Table);
