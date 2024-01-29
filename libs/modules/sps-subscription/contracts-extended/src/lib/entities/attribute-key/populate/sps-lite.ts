import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute-key/populate";
import { populate as attributePopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute/populate";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
};
