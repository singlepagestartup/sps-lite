import { populate as parentPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as flyoutPopulate } from "@sps/sps-website-builder-models-flyout-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
  flyout: {
    populate: flyoutPopulate,
  },
};
