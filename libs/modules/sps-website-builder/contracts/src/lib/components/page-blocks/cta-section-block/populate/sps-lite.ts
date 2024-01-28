import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "../../../../../../../../contracts/src/lib/components/elements/button/populate/index";
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
