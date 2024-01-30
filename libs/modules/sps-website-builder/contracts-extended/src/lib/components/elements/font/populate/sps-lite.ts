import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/font/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
};
