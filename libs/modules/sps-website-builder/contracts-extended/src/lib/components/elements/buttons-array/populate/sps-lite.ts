import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/buttons-array/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};
