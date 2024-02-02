import { populate as parentPopulate } from "@sps/sps-subscription-contracts/lib/models/tiers-list-block/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-contracts/lib/models/tier/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  tiers: {
    populate: tierPopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
