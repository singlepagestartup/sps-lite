import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Footer } from "@sps/sps-website-builder-models-footer-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),
  footer: one(Footer, {
    fields: [Table.footerId],
    references: [Footer.id],
  }),
}));

export const populate = {
  page: true as const,
  footer: true as const,
};
