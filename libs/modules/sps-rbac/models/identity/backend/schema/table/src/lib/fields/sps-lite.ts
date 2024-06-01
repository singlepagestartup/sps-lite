import * as pgCore from "drizzle-orm/pg-core";

export const fields = {
  password: pgCore.text("password"),
  account: pgCore.text("account"),
  email: pgCore.text("email"),
  provider: pgCore.text("provider").notNull().default("login_and_password"),
  id: pgCore.uuid("id").primaryKey().defaultRandom(),
  createdAt: pgCore.timestamp("created_at").notNull().defaultNow(),
  updatedAt: pgCore.timestamp("updated_at").notNull().defaultNow(),
  variant: pgCore.text("variant").notNull().default("default"),
};
