import { pgTableCreator, primaryKey, uuid } from "drizzle-orm/pg-core";
import { Table as PagesTable } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as LayoutsTable } from "@sps/sps-website-builder-models-layout-backend-schema-table";

const pgTable = pgTableCreator((name) => `sps_website_builder_${name}`);

export const Table = pgTable(
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
