import { populate as parentPopulate } from "@sps/sps-crm-contracts/lib/models/input-option/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
  extra_media: {
    populate: filePopulate,
  },
};
