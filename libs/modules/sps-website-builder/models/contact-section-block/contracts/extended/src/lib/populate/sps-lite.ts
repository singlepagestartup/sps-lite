import { populate as parentPopulate } from "@sps/sps-website-builder-models-contact-section-block-contracts";
import { populate as formPopulate } from "@sps/sps-crm-models-form-contracts";
import { populate as filePopulate } from "@sps/sps-file-storage-models-file-contracts";
import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-models-buttons-array-contracts";

export const populate = {
  ...parentPopulate,
  media: {
    populate: filePopulate,
  },
  additional_media: {
    populate: filePopulate,
  },
  form: {
    populate: formPopulate,
  },
  buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
};
