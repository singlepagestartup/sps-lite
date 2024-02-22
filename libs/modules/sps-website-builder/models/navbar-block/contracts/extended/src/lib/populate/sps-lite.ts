import { populate as parentPopulate } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as logotypePopulate } from "@sps/sps-website-builder-models-logotype-contracts";

export const populate = {
  ...parentPopulate,
  logotype: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
  additional_buttons: {
    populate: buttonPopulate,
  },
  extra_buttons: {
    populate: buttonPopulate,
  },
};
