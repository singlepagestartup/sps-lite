import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/slider-block/populate";
import { populate as sliderPopulate } from "@sps/sps-website-builder-contracts/lib/models/slider/populate";

export const populate = {
  ...parentPopulate,
  slider: {
    populate: sliderPopulate,
  },
};
