import { populate as parentPopulate } from "@sps/sps-website-builder-models-slider-block-contracts";
import { populate as sliderPopulate } from "@sps/sps-website-builder-models-slider-contracts";

export const populate = {
  ...parentPopulate,
  slider: {
    populate: sliderPopulate,
  },
};
