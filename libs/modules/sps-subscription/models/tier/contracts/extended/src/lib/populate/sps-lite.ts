import { populate as parentPopulate } from "@sps/sps-subscription-models-tier-contracts";
import { populate as attributePopulate } from "@sps/sps-subscription-models-attribute-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
