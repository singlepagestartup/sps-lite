import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonsArrayPopulate } from "../../../elements/buttons-array/populate/index";
import { populate as formPopulate } from "@sps/sps-crm-frontend/lib/redux/entities/form/populate";

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
