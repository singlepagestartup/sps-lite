import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-contracts/lib/entities/tier/populate";
import { populate as attributeKeyPopulate } from "@sps/sps-subscription-contracts/lib/entities/attribute-key/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";
import { populate as currencyPopulate } from "@sps/sps-billing-contracts/lib/entities/currency/populate";

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
