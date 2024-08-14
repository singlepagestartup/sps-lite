import * as pgCore from "drizzle-orm/pg-core";

export const fields = {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
  status: pgCore.text("status").notNull().default("draft"),
  paymentUrl: pgCore.text("payment_url").notNull().default(""),
  successUrl: pgCore.text("success_url").notNull().default(""),
  cancelUrl: pgCore.text("cancel_url").notNull().default(""),
};
