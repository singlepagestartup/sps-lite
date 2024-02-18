import { populate as parentPopulate } from "@sps/sps-website-builder-navbar-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";
import { populate as logotypePopulate } from "@sps/sps-website-builder-logotype-contracts";

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
