import { populate as parentPopulate } from "@sps/sps-ecommerce-attribute-contracts";
import { populate as attributeKeyPopulate } from "@sps/sps-ecommerce-attribute-key-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as currencyPopulate } from "@sps/sps-billing-contracts/lib/models/currency/populate";

export const populate = {
  ...parentPopulate,
  attribute_key: {
    populate: attributeKeyPopulate,
  },
  media: {
    populate: filePopulate,
  },
  currency: {
    populate: currencyPopulate,
  },
};
