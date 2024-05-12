import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as Footer } from "@sps/sps-website-builder-models-footer-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  layout: one(Layout, {
    fields: [Table.layoutId],
    references: [Layout.id],
  }),
  footer: one(Footer, {
    fields: [Table.footerId],
    references: [Footer.id],
  }),
}));

export const populate = {
  layout: true as const,
  footer: true as const,
};
