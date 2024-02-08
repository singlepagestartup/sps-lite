import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/models/button/populate";
import { populate as logotypePopulate } from "@sps/sps-website-builder-contracts/lib/models/logotype/populate";

export const populate = {
  ...parentPopulate,
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
