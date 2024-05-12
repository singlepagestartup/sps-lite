import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
  navbarBlock: one(NavbarBlock, {
    fields: [Table.navbarBlockId],
    references: [NavbarBlock.id],
  }),
}));

export const populate = {
  widget: true as const,
  navbarBlock: true as const,
};
