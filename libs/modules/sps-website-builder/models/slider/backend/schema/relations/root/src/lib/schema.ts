import { relation as slidersToSlides } from "@sps/sps-website-builder-models-slider-backend-schema-relations-sliders-to-slides";
import { relation as sliderBlocksToSliders } from "@sps/sps-website-builder-models-slider-backend-schema-relations-slider-blocks-to-sliders";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slider-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...slidersToSlides(helpers), ...sliderBlocksToSliders(helpers) };
});
