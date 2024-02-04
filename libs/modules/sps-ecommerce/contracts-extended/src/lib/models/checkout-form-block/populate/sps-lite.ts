import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/checkout-form-block/populate";
import { populate as buttonPopulate } from "@sps/sps-elements-contracts/lib/models/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
  media: {
    populate: filePopulate,
  },
  additionalMedia: {
    populate: filePopulate,
  },
};
