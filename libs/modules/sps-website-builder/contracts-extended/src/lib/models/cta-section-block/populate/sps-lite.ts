import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/cta-section-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/models/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/models/file/populate";
import { populate as formPopulate } from "@sps/sps-crm-contracts/lib/models/form/populate";

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
  form: {
    populate: formPopulate,
  },
};
