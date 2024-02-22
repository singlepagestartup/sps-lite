import { populate as parentPopulate } from "@sps/sps-ecommerce-models-attribute-key-contracts";
import { populate as attributePopulate } from "@sps/sps-subscription-models-attribute-contracts";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
};
