import * as pgCore from "drizzle-orm/pg-core";

export const fields = {
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
  email: pgCore.text("email").default(""),
  firstName: pgCore.text("first_name").default(""),
  lastName: pgCore.text("last_name").default(""),
  phone: pgCore.text("phone").default(""),
};
