import { populate as sliderBlocksToSliders } from "@sps/sps-website-builder/models/slider-block/backend/schema/relations/slider-blocks-to-sliders";
import { populate as widgetsToSliderBlocks } from "@sps/sps-website-builder/models/slider-block/backend/schema/relations/widgets-to-slider-blocks";

export const populate = (params: any) => {
  return {
    sliderBlocksToSliders: sliderBlocksToSliders(params),
    widgetsToSliderBlocks: widgetsToSliderBlocks(params),
  } as const;
};
