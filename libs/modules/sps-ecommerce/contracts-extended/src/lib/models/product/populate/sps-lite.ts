import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/product/populate";
import { populate as attributePopulate } from "@sps/sps-ecommerce-contracts/lib/models/attribute/populate";
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
