import * as pgCore from "drizzle-orm/pg-core";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";

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
      .references(() => Page.id, { onDelete: "cascade" }),
    layoutId: pgCore
      .uuid("layout_id")
      .notNull()
      .references(() => Layout.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: pgCore.primaryKey({ columns: [t.pageId, t.layoutId] }),
  }),
);
