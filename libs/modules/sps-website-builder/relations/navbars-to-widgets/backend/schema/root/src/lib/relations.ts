import { Table as Navbar } from "@sps/sps-website-builder-models-navbar-backend-schema-table";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  navbar: one(Navbar, {
    fields: [Table.navbarId],
    references: [Navbar.id],
  }),
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
}));

export const populate = {
  navbar: true as const,
  widget: true as const,
};
