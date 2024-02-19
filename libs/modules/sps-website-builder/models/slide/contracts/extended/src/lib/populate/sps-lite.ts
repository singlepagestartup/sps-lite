import { populate as parentPopulate } from "@sps/sps-website-builder-slide-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-file-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
