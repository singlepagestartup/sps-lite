import { Table as Feature } from "@sps/sps-website-builder/models/feature/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  feature: one(Feature, {
    fields: [Table.featureId],
    references: [Feature.id],
  }),
}));

export const populate = (params: any) => {
  return {
    feature: true,
  } as const;
};
