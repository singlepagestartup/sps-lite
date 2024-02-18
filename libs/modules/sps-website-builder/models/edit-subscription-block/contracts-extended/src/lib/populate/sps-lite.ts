import { populate as parentPopulate } from "@sps/sps-website-builder-edit-subscription-block-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
