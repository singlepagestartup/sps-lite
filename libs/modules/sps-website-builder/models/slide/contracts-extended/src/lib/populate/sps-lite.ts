import { populate as parentPopulate } from "@sps/sps-website-builder-slide-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
