import { relation as slides } from "@sps/sps-website-builder-models-slider-backend-schema-relations-slides";
import { relation as sliderBlocks } from "@sps/sps-website-builder-models-slider-backend-schema-relations-slider-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slider-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...slides(helpers), ...sliderBlocks(helpers) };
});
