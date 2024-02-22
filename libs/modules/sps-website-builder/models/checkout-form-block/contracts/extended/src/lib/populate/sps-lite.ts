import { populate as parentPopulate } from "@sps/sps-website-builder-models-checkout-form-block-contracts";
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
  additionalMedia: {
    populate: filePopulate,
  },
};
