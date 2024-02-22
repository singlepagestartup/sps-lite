import { populate as parentPopulate } from "@sps/sps-crm-models-input-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as inputOptionPopulate } from "@sps/sps-crm-models-input-option-contracts";

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
