import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/slider-block/populate";
import { populate as sliderPopulate } from "@sps/sps-website-builder-contracts/lib/entities/slider/populate";

export const populate = {
  ...parentPopulate,
  slider: {
    populate: sliderPopulate,
  },
};
