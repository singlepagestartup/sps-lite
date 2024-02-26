import { populate as parentPopulate } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};
