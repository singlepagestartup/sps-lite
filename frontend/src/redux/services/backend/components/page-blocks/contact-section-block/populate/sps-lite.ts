import { populate as fileUploadPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";
import { populate as buttonsArrayPopulate } from "~redux/services/backend/components/elements/buttons-array/populate";
import { populate as formPopulate } from "~redux/services/backend/extensions/sps-crm/api/form/populate";

export const populate = {
  buttons_brray: {
    populate: buttonsArrayPopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
  form: {
    populate: formPopulate,
  },
};
