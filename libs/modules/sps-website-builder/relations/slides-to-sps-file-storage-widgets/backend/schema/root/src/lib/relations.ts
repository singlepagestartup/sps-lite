import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  slide: one(Slide, {
    fields: [Table.slideId],
    references: [Slide.id],
  }),
}));

export const populate = (params: any) => {
  return {
    slide: true,
  } as const;
};
