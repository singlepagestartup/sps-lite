import { populate as parentPopulate } from "@sps/sps-website-builder-models-metatag-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";

export const populate = {
  ...parentPopulate,
  favicon: {
    populate: filePopulate,
  },
};
