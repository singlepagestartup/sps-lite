import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Navbar } from "@sps/sps-website-builder-models-navbar-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),
  navbar: one(Navbar, {
    fields: [Table.navbarId],
    references: [Navbar.id],
  }),
}));

export const populate = {
  page: true as const,
  navbar: true as const,
};
