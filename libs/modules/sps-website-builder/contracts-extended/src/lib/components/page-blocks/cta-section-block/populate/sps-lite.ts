import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/cta-section-block/populate";
import { populate as buttonPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/button/populate";
import { populate as filePopulate } from "@sps/sps-file-storage-contracts/lib/entities/file/populate";
import { populate as formPopulate } from "@sps/sps-crm-contracts/lib/entities/form/populate";

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
