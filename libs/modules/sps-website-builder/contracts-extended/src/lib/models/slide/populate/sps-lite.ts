import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/slide/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/models/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
