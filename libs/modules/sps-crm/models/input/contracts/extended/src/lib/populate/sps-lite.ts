import { populate as parentPopulate } from "@sps/sps-crm-input-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-file-contracts";
import { populate as inputOptionPopulate } from "@sps/sps-crm-input-option-contracts";

export const populate = {
  ...parentPopulate,
  options: {
    populate: inputOptionPopulate,
  },
  media: {
    populate: filePopulate,
  },
  extra_media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
