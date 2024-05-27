import { Table as SliderBlock } from "@sps/sps-website-builder-models-slider-block-backend-schema-table";
import { Table as Slider } from "@sps/sps-website-builder-models-slider-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  sliderBlock: one(SliderBlock, {
    fields: [Table.sliderBlockId],
    references: [SliderBlock.id],
  }),
  slider: one(Slider, {
    fields: [Table.sliderId],
    references: [Slider.id],
  }),
}));

export const populate = (params: any) => {
  return {
    sliderBlock: true,
    slider: true,
  } as const;
};
