import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/entities/tier/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};