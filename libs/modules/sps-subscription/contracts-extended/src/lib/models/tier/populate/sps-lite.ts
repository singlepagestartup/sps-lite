import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/models/tier/populate";
import { populate as attributePopulate } from "@sps/sps-subscription-contracts/lib/models/attribute/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/models/button/populate";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
