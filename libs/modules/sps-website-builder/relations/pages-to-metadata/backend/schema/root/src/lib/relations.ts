import { Table as Page } from "@sps/sps-website-builder/models/page/backend/schema/table";

import { Table as Metadata } from "@sps/sps-website-builder/models/metadata/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),

  metadata: one(Metadata, {
    fields: [Table.metadataId],
    references: [Metadata.id],
  }),
}));

export const populate = (params: any) => {
  return {
    page: true,

    metadata: true,
  } as const;
};
