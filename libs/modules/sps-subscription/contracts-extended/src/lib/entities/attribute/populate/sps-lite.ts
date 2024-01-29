import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute/populate";
import { populate as attributeKeyPopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute-key/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";
import { populate as currencyPopulate } from "@sps/sps-billing-contracts/lib/entities/currency/populate";

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
