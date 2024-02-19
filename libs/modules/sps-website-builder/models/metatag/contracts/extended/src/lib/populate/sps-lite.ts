import { populate as parentPopulate } from "@sps/sps-website-builder-metatag-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  favicon: {
    populate: filePopulate,
  },
};
