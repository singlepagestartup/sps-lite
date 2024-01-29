// import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "../../../elements/button/populate";
// import { populate as formPopulate } from "@sps/sps-crm-frontend/lib/redux/entities/form/populate";

export const populate = {
  buttons: {
    populate: buttonPopulate,
  },
  media: {
    populate: "*",
  },
  additional_media: {
    populate: "*",
  },
  form: {
    populate: "*",
  },
};
