import { populate as parentPopulate } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { populate as featurePopulate } from "@sps/sps-website-builder-models-feature-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

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
