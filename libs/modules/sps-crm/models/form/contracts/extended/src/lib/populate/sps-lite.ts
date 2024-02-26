import { populate as parentPopulate } from "@sps/sps-crm-models-form-contracts";
import { populate as inputPopulate } from "@sps/sps-crm-models-input-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";

export const populate = {
  ...parentPopulate,
  inputs: {
    populate: inputPopulate,
  },
  button: {
    populate: buttonPopulate,
  },
};
