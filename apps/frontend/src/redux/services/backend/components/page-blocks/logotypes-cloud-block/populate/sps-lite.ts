import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";
import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";

export const populate = {
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
