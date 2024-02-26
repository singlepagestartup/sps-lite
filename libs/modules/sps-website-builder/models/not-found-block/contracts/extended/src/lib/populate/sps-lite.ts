import { populate as parentPopulate } from "@sps/sps-website-builder-models-not-found-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
