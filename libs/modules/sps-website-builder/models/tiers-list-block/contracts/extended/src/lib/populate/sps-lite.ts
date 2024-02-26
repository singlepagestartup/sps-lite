import { populate as parentPopulate } from "@sps/sps-website-builder-models-tiers-list-block-contracts";
import { populate as tierPopulate } from "@sps/sps-subscription-models-tier-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

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
