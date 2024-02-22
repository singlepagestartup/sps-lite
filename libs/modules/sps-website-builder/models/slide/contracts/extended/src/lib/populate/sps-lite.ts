import { populate as parentPopulate } from "@sps/sps-website-builder-models-slide-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
