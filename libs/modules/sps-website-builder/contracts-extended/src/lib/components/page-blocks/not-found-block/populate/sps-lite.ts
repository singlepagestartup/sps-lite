import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/not-found-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";

export const populate = {
  ...parentPopulate,
  buttons: {
    populate: buttonPopulate,
  },
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
};
