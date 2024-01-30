import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/logotypes-cloud-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as logotypePopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/logotype/populate";

export const populate = {
  ...parentPopulate,
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
