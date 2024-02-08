import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/attribute/populate";
import { populate as attributeKeyPopulate } from "@sps/sps-ecommerce-contracts/lib/models/attribute-key/populate";
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
