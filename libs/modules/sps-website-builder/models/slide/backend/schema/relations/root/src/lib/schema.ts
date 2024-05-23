import { relation as widgetsToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-widgets-to-slides";
import { relation as slidersToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-sliders-to-slides";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slide-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgetsToSlides(helpers), ...slidersToSlides(helpers) };
});
