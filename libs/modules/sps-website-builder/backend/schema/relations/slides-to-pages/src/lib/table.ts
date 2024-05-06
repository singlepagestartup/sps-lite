import * as pgCore from "drizzle-orm/pg-core";
import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";

export const model = "SPSWBSlidesToPages";

const moduleName = "sps_w_b";
const table = "slides_to_pages";

const pgTable = pgCore.pgTableCreator((name) => `${moduleName}_${name}`);

export const Table = pgTable(
  table,
  {
    slideId: pgCore
      .uuid("slide_id")
      .notNull()
      .references(() => Slide.id),
    pageId: pgCore
      .uuid("page_id")
      .notNull()
      .references(() => Page.id),
  },
  (t) => ({
    pk: pgCore.primaryKey({ columns: [t.slideId, t.pageId] }),
  }),
);
