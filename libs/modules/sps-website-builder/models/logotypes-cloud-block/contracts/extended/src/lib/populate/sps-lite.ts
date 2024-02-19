import { populate as parentPopulate } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";
import { populate as logotypePopulate } from "@sps/sps-website-builder-logotype-contracts";

export const populate = {
  ...parentPopulate,
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
