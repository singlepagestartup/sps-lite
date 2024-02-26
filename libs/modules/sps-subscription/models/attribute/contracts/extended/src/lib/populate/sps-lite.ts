import { populate as parentPopulate } from "@sps/sps-subscription-models-attribute-contracts";
import { populate as tierPopulate } from "@sps/sps-subscription-models-tier-contracts";
import { populate as attributeKeyPopulate } from "@sps/sps-ecommerce-models-attribute-key-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as currencyPopulate } from "@sps/sps-billing-models-currency-contracts";

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
