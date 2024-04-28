import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";

import { schema as pages } from "@sps/sps-website-builder-models-page-backend-schema-plain";
import { schema as layouts } from "@sps/sps-website-builder-models-layout-backend-schema-plain";
import { relations } from "drizzle-orm";

export const pagesToLayouts = pgTable(
  "pages_to_layouts",
  {
    pageId: integer("page_id")
      .notNull()
      .references(() => pages.id),
    layoutId: integer("layout_id")
      .notNull()
      .references(() => layouts.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.pageId, t.layoutId] }),
  }),
);

export const pagesToLayoutsRelations = relations(pagesToLayouts, ({ one }) => ({
  page: one(pages, {
    fields: [pagesToLayouts.pageId],
    references: [pages.id],
  }),
  layout: one(layouts, {
    fields: [pagesToLayouts.layoutId],
    references: [layouts.id],
  }),
}));

export const schema = { pagesToLayouts, pagesToLayoutsRelations };
