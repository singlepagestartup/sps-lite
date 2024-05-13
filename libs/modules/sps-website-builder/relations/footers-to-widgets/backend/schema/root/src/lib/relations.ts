import { Table as Footer } from "@sps/sps-website-builder-models-footer-backend-schema-table";
import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  footer: one(Footer, {
    fields: [Table.footerId],
    references: [Footer.id],
  }),
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
}));

export const populate = {
  footer: true as const,
  widget: true as const,
};
