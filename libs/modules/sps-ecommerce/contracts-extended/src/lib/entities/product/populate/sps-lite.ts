import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/product/populate";
import { populate as attributePopulate } from "@sps/sps-ecommerce-contracts/lib/entities/attribute/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  attributes: {
    populate: attributePopulate,
  },
  media: {
    populate: filePopulate,
  },
};
