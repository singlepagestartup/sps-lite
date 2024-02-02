import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/metatag/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  favicon: {
    populate: filePopulate,
  },
};
