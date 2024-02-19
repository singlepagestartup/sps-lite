import { populate as parentPopulate } from "@sps/sps-website-builder-slider-contracts";
import { populate as slidePopulate } from "@sps/sps-website-builder-slide-contracts";

export const populate = {
  ...parentPopulate,
  slides: {
    populate: slidePopulate,
  },
};
