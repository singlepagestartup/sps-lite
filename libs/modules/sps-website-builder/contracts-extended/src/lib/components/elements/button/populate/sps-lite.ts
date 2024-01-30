import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";
import { populate as flyoutPopulate } from "@sps/sps-website-builder-contracts/lib/entities/flyout/populate";

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
