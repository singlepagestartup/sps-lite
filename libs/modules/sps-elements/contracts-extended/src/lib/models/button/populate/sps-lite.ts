import { populate as parentPopulate } from "@sps/sps-elements-contracts/lib/models/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as flyoutPopulate } from "@sps/sps-elements-contracts/lib/models/flyout/populate";

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
