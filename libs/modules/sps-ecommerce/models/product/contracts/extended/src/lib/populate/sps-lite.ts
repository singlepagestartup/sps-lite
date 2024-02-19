import { populate as parentPopulate } from "@sps/sps-ecommerce-product-contracts";
import { populate as attributePopulate } from "@sps/sps-ecommerce-attribute-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  media: {
    populate: filePopulate,
  },
};
