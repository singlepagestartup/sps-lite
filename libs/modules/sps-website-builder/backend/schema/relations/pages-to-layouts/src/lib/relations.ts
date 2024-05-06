import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),
  layout: one(Layout, {
    fields: [Table.layoutId],
    references: [Layout.id],
  }),
}));

export const populate = {
  page: true,
  layout: true,
};
