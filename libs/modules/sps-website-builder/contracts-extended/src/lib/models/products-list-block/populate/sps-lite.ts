import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/products-list-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};
