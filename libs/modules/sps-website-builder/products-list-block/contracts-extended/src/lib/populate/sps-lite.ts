import { populate as parentPopulate } from "@sps/sps-website-builder-products-list-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};
