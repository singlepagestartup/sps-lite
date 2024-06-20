import { Table as Logotype } from "@sps/sps-website-builder/models/logotype/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  logotype: one(Logotype, {
    fields: [Table.logotypeId],
    references: [Logotype.id],
  }),
}));

export const populate = (params: any) => {
  return {
    logotype: true,
  } as const;
};
