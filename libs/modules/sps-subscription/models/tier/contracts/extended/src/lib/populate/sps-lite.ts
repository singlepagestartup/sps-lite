import { populate as parentPopulate } from "@sps/sps-subscription-tier-contracts";
import { populate as attributePopulate } from "@sps/sps-subscription-attribute-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
