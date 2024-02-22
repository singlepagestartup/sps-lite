import { populate as parentPopulate } from "@sps/sps-ecommerce-attribute-contracts";
import { populate as attributeKeyPopulate } from "@sps/sps-ecommerce-attribute-key-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-file-contracts";
import { populate as currencyPopulate } from "@sps/sps-billing-models-currency-contracts";

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
