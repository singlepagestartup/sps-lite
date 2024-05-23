import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),

  slide: one(Slide, {
    fields: [Table.slideId],
    references: [Slide.id],
  }),
}));

export const populate = {
  widget: true as const,

  slide: true as const,
};
