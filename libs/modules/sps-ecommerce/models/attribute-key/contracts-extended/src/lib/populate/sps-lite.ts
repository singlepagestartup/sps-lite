import { populate as parentPopulate } from "@sps/sps-ecommerce-attribute-key-contracts";
import { populate as attributePopulate } from "@sps/sps-ecommerce-attribute-contracts";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
};
