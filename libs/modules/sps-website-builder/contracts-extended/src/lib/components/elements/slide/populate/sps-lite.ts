import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/slide/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
