import { populate as parentPopulate } from "@sps/sps-crm-form-contracts";
import { populate as inputPopulate } from "@sps/sps-crm-input-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";

export const populate = {
  ...parentPopulate,
  inputs: {
    populate: inputPopulate,
  },
  button: {
    populate: buttonPopulate,
  },
};
