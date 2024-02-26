import { populate as parentPopulate } from "@sps/sps-website-builder-models-slider-contracts";
import { populate as slidePopulate } from "@sps/sps-website-builder-models-slide-contracts";

export const populate = {
  ...parentPopulate,
  slides: {
    populate: slidePopulate,
  },
};
