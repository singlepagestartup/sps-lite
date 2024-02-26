import { populate as parentPopulate } from "@sps/sps-website-builder-models-footer-block-contracts";
import { populate as logotypePopulate } from "@sps/sps-website-builder-models-logotype-contracts";
import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-models-buttons-array-contracts";

export const populate = {
  ...parentPopulate,
  logotype: {
    populate: logotypePopulate,
  },
  buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  additional_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  extra_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
};
