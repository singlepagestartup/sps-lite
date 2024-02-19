import { populate as parentPopulate } from "@sps/sps-subscription-attribute-contracts";
import { populate as tierPopulate } from "@sps/sps-subscription-tier-contracts";
import { populate as attributeKeyPopulate } from "@sps/sps-ecommerce-attribute-key-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as currencyPopulate } from "@sps/sps-billing-currency-contracts";

export const populate = {
  ...parentPopulate,
  tier: {
    populate: tierPopulate,
  },
  attribute_key: {
    populate: attributeKeyPopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
  currency: {
    populate: currencyPopulate,
  },
};
