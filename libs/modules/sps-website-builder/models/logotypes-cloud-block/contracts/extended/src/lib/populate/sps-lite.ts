import { populate as parentPopulate } from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as logotypePopulate } from "@sps/sps-website-builder-models-logotype-contracts";

export const populate = {
  ...parentPopulate,
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
