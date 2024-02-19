import { populate as parentPopulate } from "@sps/sps-website-builder-slider-block-contracts";
import { populate as sliderPopulate } from "@sps/sps-website-builder-slider-contracts";

export const populate = {
  ...parentPopulate,
  slider: {
    populate: sliderPopulate,
  },
};
