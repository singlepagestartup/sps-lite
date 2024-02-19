import { populate as parentPopulate } from "@sps/sps-website-builder-incentives-block-contracts";
import { populate as featurePopulate } from "@sps/sps-website-builder-feature-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-file-contracts";

export const populate = {
  ...parentPopulate,
  features: {
    populate: featurePopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
