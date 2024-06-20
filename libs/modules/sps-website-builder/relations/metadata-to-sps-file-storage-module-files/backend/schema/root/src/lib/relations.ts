import { Table as Metadata } from "@sps/sps-website-builder/models/metadata/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  metadata: one(Metadata, {
    fields: [Table.metadataId],
    references: [Metadata.id],
  }),
}));

export const populate = (params: any) => {
  return {
    metadata: true,
  } as const;
};
