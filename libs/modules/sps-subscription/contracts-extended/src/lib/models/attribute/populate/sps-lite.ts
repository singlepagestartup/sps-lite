import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/models/attribute/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-contracts/lib/models/tier/populate";
import { populate as attributeKeyPopulate } from "@sps/sps-subscription-contracts/lib/models/attribute-key/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as currencyPopulate } from "@sps/sps-billing-contracts/lib/models/currency/populate";

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
