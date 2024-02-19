import { populate as parentPopulate } from "@sps/sps-crm-review-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-file-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
