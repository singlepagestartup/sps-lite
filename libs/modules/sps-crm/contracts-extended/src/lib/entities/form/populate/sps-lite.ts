import { populate as parentPopulate } from "@sps/sps-crm-contracts/lib/entities/form/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";

export const populate = {
  ...parentPopulate,
  button: {
    populate: buttonPopulate,
  },
};
