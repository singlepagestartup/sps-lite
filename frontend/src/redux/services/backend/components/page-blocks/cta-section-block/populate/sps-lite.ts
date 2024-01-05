import { populate as fileUploadPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";
import { populate as formPopulate } from "~redux/services/backend/extensions/sps-crm/api/form/populate";

export const populate = {
  buttons: {
    populate: buttonPopulate,
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
