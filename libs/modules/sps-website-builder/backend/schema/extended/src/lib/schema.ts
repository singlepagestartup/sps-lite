import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { Table as PagesTable } from "@sps/sps-website-builder-models-page-backend-schema-plain";
import { Table as LayoutsTable } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { relations } from "drizzle-orm";

export const PageToLayoutTable = pgTable(
  "pages_to_layouts",
  {
    pageId: uuid("page_id")
      .notNull()
      .references(() => PagesTable.id),
    layoutId: uuid("layout_id")
      .notNull()
      .references(() => LayoutsTable.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.pageId, t.layoutId] }),
  }),
);

export const PageToLayoutRelationTable = relations(
  PageToLayoutTable,
  ({ one }) => ({
    page: one(PagesTable, {
      fields: [PageToLayoutTable.pageId],
      references: [PagesTable.id],
    }),
    layout: one(LayoutsTable, {
      fields: [PageToLayoutTable.layoutId],
      references: [LayoutsTable.id],
    }),
  }),
);

export const Tables = { PageToLayoutTable, PageToLayoutRelationTable };
