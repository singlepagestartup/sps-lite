import { populate as parentPopulate } from "@sps/sps-elements-contracts/lib/models/buttons-array/populate";
import { populate as buttonPopulate } from "@sps/sps-elements-contracts/lib/models/button/populate";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
};
