import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/slider/populate";
import { populate as slidePopulate } from "@sps/sps-website-builder-contracts/lib/models/slide/populate";

export const populate = {
  ...parentPopulate,
  slides: {
    populate: slidePopulate,
  },
};
