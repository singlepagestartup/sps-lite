import { Table as PagesTable } from "@sps/sps-website-builder-models-page-backend-schema-plain";
import { Table as LayoutsTable } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(PagesTable, {
    fields: [Table.pageId],
    references: [PagesTable.id],
  }),
  layout: one(LayoutsTable, {
    fields: [Table.layoutId],
    references: [LayoutsTable.id],
  }),
}));
