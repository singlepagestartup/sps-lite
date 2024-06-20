import { relation as sliderBlocksToSliders } from "@sps/sps-website-builder/models/slider-block/backend/schema/relations/slider-blocks-to-sliders";
import { relation as widgetsToSliderBlocks } from "@sps/sps-website-builder/models/slider-block/backend/schema/relations/widgets-to-slider-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder/models/slider-block/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...sliderBlocksToSliders(helpers),
    ...widgetsToSliderBlocks(helpers),
  };
});
