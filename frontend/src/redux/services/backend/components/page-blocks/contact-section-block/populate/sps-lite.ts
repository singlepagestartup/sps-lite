import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";
import { populate as buttonsArrayPopulate } from "~redux/services/backend/components/elements/buttons-array/populate";
import { populate as formPopulate } from "~redux/services/backend/models/form/populate";

export const populate = {
  buttonsArray: {
    populate: buttonsArrayPopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additionalMedia: {
    populate: fileUploadPopulate,
  },
  form: {
    populate: formPopulate,
  },
};
