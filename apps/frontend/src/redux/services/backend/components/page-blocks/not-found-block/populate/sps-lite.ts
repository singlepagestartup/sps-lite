import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";

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
};
