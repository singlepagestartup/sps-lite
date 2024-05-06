import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { Table as Page } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  slide: one(Slide, {
    fields: [Table.slideId],
    references: [Slide.id],
  }),
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),
}));

export const populate = {
  slide: true as const,
  page: true as const,
};
