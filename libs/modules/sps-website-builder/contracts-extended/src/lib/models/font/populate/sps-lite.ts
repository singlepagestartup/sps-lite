import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/font/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
};
