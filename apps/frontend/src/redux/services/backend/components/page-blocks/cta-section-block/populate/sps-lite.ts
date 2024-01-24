import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";
import { populate as formPopulate } from "@sps/sps-crm-frontend/lib/redux/entities/form/populate";

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
