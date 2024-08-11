import { createInsertSchema, createSelectSchema } from "drizzle-zod";
export * from "./schema";
import { Table } from "./schema";
import { z } from "zod";

export const insertSchema = createInsertSchema(Table, {
  slug: z.string().regex(/^[a-z0-9-]+$/),
});
export const selectSchema = createSelectSchema(Table);
export type ISelectSchema = typeof Table.$inferSelect;
export type IInsertSchema = typeof Table.$inferInsert;
export const dataDirectory = `${__dirname}/data`;
