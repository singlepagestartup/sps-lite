import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/navbar-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as logotypePopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/populate";

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
