import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/slider/populate";
import { populate as slidePopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/slide/populate";

export const populate = {
  ...parentPopulate,
  slides: {
    populate: slidePopulate,
  },
};
