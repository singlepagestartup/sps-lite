import * as pgCore from "drizzle-orm/pg-core";
import { Table as PagesTable } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as LayoutsTable } from "@sps/sps-website-builder-models-layout-backend-schema-table";

export const modelName = "SPSWBPagesToLayouts";

const moduleName = "sps_w_b";
const table = "pages_to_layouts";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(
  table,
  {
    pageId: pgCore
      .uuid("page_id")
      .notNull()
      .references(() => PagesTable.id, { onDelete: "cascade" }),
    layoutId: pgCore
      .uuid("layout_id")
      .notNull()
      .references(() => LayoutsTable.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: pgCore.primaryKey({ columns: [t.pageId, t.layoutId] }),
  }),
);
