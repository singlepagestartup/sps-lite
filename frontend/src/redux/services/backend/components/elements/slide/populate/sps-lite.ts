import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";

export const populate = {
  media: {
    populate: fileUploadPopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
