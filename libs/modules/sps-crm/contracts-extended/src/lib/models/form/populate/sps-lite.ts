import { populate as parentPopulate } from "@sps/sps-crm-contracts/lib/models/form/populate";
import { populate as inputPopulate } from "@sps/sps-crm-contracts/lib/models/input/populate";
import { populate as buttonPopulate } from "@sps/sps-elements-contracts/lib/models/button/populate";

export const populate = {
  ...parentPopulate,
  inputs: {
    populate: inputPopulate,
  },
  button: {
    populate: buttonPopulate,
  },
};
