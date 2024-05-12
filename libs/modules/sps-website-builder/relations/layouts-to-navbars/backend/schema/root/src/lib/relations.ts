import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as Navbar } from "@sps/sps-website-builder-models-navbar-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  layout: one(Layout, {
    fields: [Table.layoutId],
    references: [Layout.id],
  }),
  navbar: one(Navbar, {
    fields: [Table.navbarId],
    references: [Navbar.id],
  }),
}));

export const populate = {
  layout: true as const,
  navbar: true as const,
};
