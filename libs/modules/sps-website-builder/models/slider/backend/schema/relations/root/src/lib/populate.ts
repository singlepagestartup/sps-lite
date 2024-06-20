import { populate as slidersToSlides } from "@sps/sps-website-builder/models/slider/backend/schema/relations/sliders-to-slides";
import { populate as sliderBlocksToSliders } from "@sps/sps-website-builder/models/slider/backend/schema/relations/slider-blocks-to-sliders";

export const populate = (params: any) => {
  return {
    slidersToSlides: slidersToSlides(params),
    sliderBlocksToSliders: sliderBlocksToSliders(params),
  } as const;
};
