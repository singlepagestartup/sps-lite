import { relation as sliders } from "@sps/sps-website-builder-models-slider-block-backend-schema-relations-sliders";
import { relation as widgets } from "@sps/sps-website-builder-models-slider-block-backend-schema-relations-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slider-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...sliders(helpers), ...widgets(helpers) };
});
