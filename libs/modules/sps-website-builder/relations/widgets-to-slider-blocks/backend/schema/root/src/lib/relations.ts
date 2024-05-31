import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as SliderBlock } from "@sps/sps-website-builder-models-slider-block-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
  sliderBlock: one(SliderBlock, {
    fields: [Table.sliderBlockId],
    references: [SliderBlock.id],
  }),
}));

export const populate = (params: any) => {
  return {
    widget: true,
    sliderBlock: true,
  } as const;
};
