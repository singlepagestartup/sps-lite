import { Table as Slider } from "@sps/sps-website-builder-models-slider-backend-schema-table";
import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  slider: one(Slider, {
    fields: [Table.sliderId],
    references: [Slider.id],
  }),
  slide: one(Slide, {
    fields: [Table.slideId],
    references: [Slide.id],
  }),
}));

export const populate = (params: any) => {
  return {
    slider: true,
    slide: true,
  } as const;
};
