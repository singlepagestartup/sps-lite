import { populate as parentPopulate } from "@sps/sps-ecommerce-models-product-contracts";
import { populate as attributePopulate } from "@sps/sps-ecommerce-models-attribute-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  media: {
    populate: filePopulate,
  },
};
