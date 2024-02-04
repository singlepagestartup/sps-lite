import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/models/attribute-key/populate";
import { populate as attributePopulate } from "@sps/sps-subscription-contracts/lib/models/attribute/populate";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
};
