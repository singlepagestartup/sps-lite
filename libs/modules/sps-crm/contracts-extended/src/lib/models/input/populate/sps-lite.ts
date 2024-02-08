import { populate as parentPopulate } from "@sps/sps-crm-contracts/lib/models/input/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as inputOptionPopulate } from "@sps/sps-crm-contracts/lib/models/input-option/populate";

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
